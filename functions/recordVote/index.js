/**
 * Records a vote via Firebase, and returns 200 to Nexmo
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.recordVote = (req, res) => {
    // Configure our voting options pool
    const opts = [
        'PITCH1',
        'PITCH2',
        'PITCH3',
        'PITCH4',
        'PITCH5',
        'PITCH6',
    ];
    // Number & Content-Type validation
    const params = typeof req.body.to !== 'undefined' ? req.body : req.query;
    if (params.to === process.env.INGRESS_NUMBER && params.type === 'text') {
        // Length validation
        if (params.keyword.length > 5) {
            let vote = params.keyword.toUpperCase();
            // Vote keyword validation
            if (opts.includes(vote)) {
                // Time to init Firebase
                const fba = require('firebase-admin');
                console.log('Instantiate Firebase');
                !fba.apps.length && fba.initializeApp({
                    credential: fba.credential.applicationDefault(),
                });
                console.log('Instantiate Firestore');
                const fdb = fba.firestore();
                // Add/update vote log
                console.log('Insert voter registration');
                let votersRef = fdb.collection('voters').doc(params.msisdn).set({
                    vote: vote,
                    recorded: Date.now(),
                }).then(ref => {
                    console.log('Voter registered: ', params.msisdn.substr(-4));
                    let votesRef = fdb.collection(`votes`).add({
                        vote: vote,
                        castedBy: params.msisdn,
                        recorded: Date.now(),
                    }).then(ref => {
                        console.log('Vote casted: ', ref.id);
                        res.status(200).send('Vote casted.');
                    }).catch(err => {
                        console.error(err);
                        res.status(500).send(err);
                    });
                }).catch(err => {
                    console.error(err);
                    res.status(500).send(err);
                });
            }
        } else {
            // Return 200 to stop webhook delivery for invalid message
            console.log('Keyword is invalid length');
            res.status(200).send('Does not meet length requirements.');
        }
    } else {
        // Return 200 to stop webhook delivery for invalid message
        console.log('Payload failed validation');
        res.status(200).send('Does not meet validation requirements.');
    }
};
