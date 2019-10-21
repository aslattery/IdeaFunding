// eslint-disable-next-line no-unused-vars
const d = require('debug')('suptuc:getVotingSettings');
// eslint-disable-next-line space-before-function-paren
export const getVotingSettings = (db) =>
    new Promise((resolve, reject) => {
        const votingSettingsRef = db.collection('settings').doc('production');
        votingSettingsRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const votingSettings = doc.data();
                    d('Got votingSettings, %O', votingSettings);
                    resolve(votingSettings);
                }
                reject(
                    new Error(
                        `votingSettings doesn't exist, or can't be fetched`
                    )
                );
            })
            .catch((err) => {
                d('Failed to get /settings/production: %O', err);
                reject(err);
            });
    });
