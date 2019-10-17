// eslint-disable-next-line no-unused-vars
const d = require('debug')('suptuc:getResults');

export const sortResults = (a, b) => a.votes - b.votes;

// eslint-disable-next-line space-before-function-paren
export const getResults = (db, options = []) =>
    new Promise((resolve, reject) => {
        let results = [];
        const votesRef = db.collection('votes');
        /**
         * First, let's map over our options, and query the votes that match.
         */
        options.map((option, i) => {
            d(`%s: %s (%s)`, i, option.name, option.shortcode);
            // TODO: query for vote results for each option, with onSnapshot
            // for realtime updates.
        });

        /**
         * Sort, and then return our results once we have matching options and
         * result lenghts.
         */
        if (results.length === options.length) {
            resolve(results.sort(sortResults));
        }
    });
