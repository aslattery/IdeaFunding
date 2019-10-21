const functions = require('firebase-functions');
const admin = require('firebase-admin');


try {
    admin.initializeApp();
} catch (e) {
    // This is just in case it has been initialized by another function first
}

exports = module.exports = functions.https.onRequest((request, response) => {
    /*
        TWILIO POST Request (request.body.Body)
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
        Body: ‘Test Two’,
        FromCountry: ‘US’,
        To: ‘+##########’,
        MessagingServiceSid: ‘MG2ca64febf3dc8f8eb0fd10d7aa45663b’,
        ToZip: ‘61810’,
        NumSegments: ‘1’,
        MessageSid: ‘SM0502c78af796157271062c0155e5f5ec’,
        AccountSid: ‘*******************************’,
        From: ‘+##########’,
        ApiVersion: ‘2010-04-01’
    }
     */
    const messageBody = request.body.Body;
    let toPhone = request.body.To.match(/[0-9]+/);
    let fromPhone = request.body.From.match(/[0-9]+/);

    if (toPhone == null || fromPhone == null) {
        response.status(500);
        response.send("Invalid TO or FROM phone");
        return;
    } else {
        toPhone = parseInt(toPhone[0]);
        fromPhone = parseInt(fromPhone[0]);
    }

    const db = admin.firestore();
    const increment = admin.firestore.FieldValue.increment(1);
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
            if (data.length == 1) {
                const poll = data[0];
                let pollId = poll.id;
                console.log('Poll found with id: ', pollId);
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
                    poll.ref.update({[`votes.${fromPhone}`] : votedFor.shortcode});
                    poll.ref.update({ totalVotes: increment });
                    response.status(200);
                    response.send("success");
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
    return new RegExp(str, 'i');
};