// eslint-disable-next-line no-unused-vars
const d = require('debug')('suptuc:getPollConfig');
// eslint-disable-next-line space-before-function-paren
export const getPollConfig = (votingSettingsRef) =>
    new Promise((resolve, reject) => {
        votingSettingsRef.poll
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const pollConfig = doc.data();
                    d('Got pollConfig, %O', pollConfig);
                    resolve(pollConfig);
                }
                reject(
                    new Error(`pollConfig doesn't exist, or can't be fetched`)
                );
            })
            .catch((err) => {
                d('Failed to get pollConfig: %O', err);
                reject(err);
            });
    });
