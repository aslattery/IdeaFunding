const functions = require('firebase-functions');
const admin = require('firebase-admin');

const fs = require('fs');


try {
    admin.initializeApp();
} catch (e) {
    // This is just in case it has been initialized by another function first
}

let supportedProviders = {};
fs.readdir(`${__dirname}/supportedProviders`, (err, providers) => {
    if (err != null) {
        throw new Error(err);
    }
    for (let provider of providers) {
        supportedProviders[provider.split('.')[0]] = require(`./supportedProviders/${provider}`);
    }
});

exports = module.exports = functions.https.onRequest((request, response) => {

    let provider = 'twilio';
    const providerParam = request.params[0].split('/')[1];
    if (Object.keys(supportedProviders).includes(providerParam)) {
        provider = providerParam;
    }

    const parsedPayload = supportedProviders[provider](request);
    if (parsedPayload === null) {
        response.status(200);
        response.send("Malformed SMS payload recieved");
    }
    let {toPhone, fromPhone, messageBody} = parsedPayload;

    const db = admin.firestore();
    const increment = admin.firestore.FieldValue.increment(1);
    let pollsRef = db.collection('polls');
    let pollQuery = pollsRef.where('phoneNumber', '==', toPhone).where('votingEnabled', '==', true);
    pollQuery.get().then(snapshot => {
        if (snapshot.empty) {
            console.log('No active poll found for phone number', toPhone);
            response.status(200); // No more 500s, this triggers retry for "nexmo"
            response.send(`No active poll found for phone number ${toPhone}`);
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
                    response.send("Vote recorded");
                } else {
                    console.log('votedFor not matched');
                    response.status(200); // No more 500s, this triggers retry for "nexmo"
                    response.send("No matched voting option");
                    return;
                }
            } else {
                console.log('More than one poll found....');
                response.status(200); // No more 500s, this triggers retry for "nexmo"
                response.send(`More than one poll found for number ${toPhone}`);
                return;
            }
        }
    }).catch(err => {
        console.log(err);
        response.status(200); // No more 500s, this triggers retry for "nexmo"
        response.send("Database Error");
        return;
    })
});

const transformFlexReg = (str) => {
    str = str.toLowerCase();
    str = str.replace(' ', '\s?');
    return new RegExp(str, 'i');
};