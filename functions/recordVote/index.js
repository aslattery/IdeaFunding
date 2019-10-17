const functions = require('firebase-functions');
const admin = require('firebase-admin');
try {
    admin.initializeApp();
} catch (e) {
    // This is just in case it has been initialized by another function first
}
exports = module.exports = functions.https.onRequest((request, response) => {
    /*
     {
        ToCountry: ‘US’,
        ToState: ‘IL’,
        SmsMessageSid: ‘SM0502c78af796157271062c0155e5f5ec’,
        NumMedia: ‘0’,
        ToCity: ‘SIDELL’,
        FromZip: ‘85004’,
        SmsSid: ‘SM0502c78af796157271062c0155e5f5ec’,
        FromState: ‘AZ’,
        SmsStatus: ‘received’,
        FromCity: ‘PHOENIX’,
        Body: ‘Test two’,
        FromCountry: ‘US’,
        To: ‘+12172884421’,
        MessagingServiceSid: ‘MG2ca64febf3dc8f8eb0fd10d7aa45663b’,
        ToZip: ‘61810’,
        NumSegments: ‘1’,
        MessageSid: ‘SM0502c78af796157271062c0155e5f5ec’,
        AccountSid: ‘AC0e0f269bf9ec4a806d4dbe5a1c616023’,
        From: ‘+15203707474’,
        ApiVersion: ‘2010-04-01’
    }
     */
    const messageBody = request.body.Body;
    let toPhone = request.body.To.match(/[0-9]+/);
    let fromPhone = request.body.From.match(/[0-9]+/);

    if (toPhone == null || fromPhone == null) {
        response.status(500);
        response.send("Invalid TO of FROM phone");
        return;
    } else {
        toPhone = parseInt(toPhone[0]);
        fromPhone = parseInt(fromPhone[0]);
    }

    const db = admin.firestore();
    let pollsRef = db.collection('polls');
    let pollQuery = pollsRef.where('phoneNumber', '==', toPhone).where('votingEnabled', '==', true);
    pollQuery.get().then(snapshot => {
        if (snapshot.empty) {
            console.log('No active poll found for phone number', toPhone);
            response.status(500);
            response.send("error");
            return;
        } else {
            let data = snapshot.docs;
            console.log(data);
            if (data.length == 1) {
                const poll = data[0];
                console.log('poll found');
                let pollId = poll.id;
                console.log(pollId);
                data = poll.data();
                let options = data.options;

                let nameReg = '', shortcodeReg = '';
                let votedFor = options.find(o => {
                    nameReg = transformFlexReg(o.name);
                    shortcodeReg = transformFlexReg(o.shortcode);
                    let shortMatch = messageBody.match(shortcodeReg)
                    let nameMatch = messageBody.match(nameReg);
                    return shortMatch != null || nameMatch != null
                });
                if (votedFor != null) {
                    console.log('voted for match');
                    console.log(votedFor);
                    votedFor = votedFor.shortcode;
                    let newVote = {
                        poll: poll.ref,
                        voter: fromPhone,
                        recorded: Date.now(),
                        votedFor
                    };
                    console.log(newVote);
                    let VotesRef = db.collection('votes');
                    // let VoterQuery = VotesRef.where('voter', '==', fromPhone).where('poll', '==', poll.ref));
                    let VoterQuery = VotesRef.where('voter', '==', fromPhone);
                    VoterQuery.get().then(votesSnapshot => {
                        if (votesSnapshot.empty) {
                            console.log("first time voter");
                            VotesRef.add(newVote);
                            response.status(200);
                            response.send("success");
                            return;
                        } else {
                            let votes = votesSnapshot.docs;
                            if (votes.length > 1) {
                                console.log('we have problems');
                                // TODO: maybe pop one for updating and delete the rest
                                response.status(500);
                                response.send("error");
                                return;
                            } else {
                                if (votes.length == 1) {
                                    console.log("We have a prior vote");
                                    vote = votes[0];
                                    vote.ref.update(newVote);
                                    response.status(200);
                                    response.send("success");
                                    return;
                                } else {
                                    console.log('shouldn\'t happen');
                                    response.status(500);
                                    response.send("error");
                                }
                            }
                        }
                    });
                } else {
                    console.log('votedFor not matched');
                    response.status(500);
                    response.send("no matched vote");
                    return;
                }
            } else {
                console.log('More than one poll found....');
                response.status(500);
                response.send("error");
                return;
            }
        }
    }).catch(err => {
        console.log(err);
        response.status(500);
        response.send("error");
        return;
    })
});

const transformFlexReg = (str) => {
    str = str.toLowerCase();
    str = str.replace(' ', '\s?');
    str = str.replace('k', '[c,k]');
    return new RegExp(str, 'i');
};