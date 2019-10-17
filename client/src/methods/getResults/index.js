// eslint-disable-next-line no-unused-vars
const d = require('debug')('suptuc:getResults');

export const sortResults = (a, b) => b.votes - a.votes;

// eslint-disable-next-line space-before-function-paren
export const getResults = (db, options = []) =>
    new Promise((resolve, reject) => {
        let results = {
            items: [],
            votes: 0,
            voters: 0
        };
        /**
         * First, let's map over our options, and query the votes that match.
         */
        options.map((option, i) => {
            d(`%s: %s (%s)`, i, option.name, option.shortcode);
            results.items.push({ ...option, votes: 0 });
        });

        /**
         * Sort, and then return our results once we have matching options and
         * result lenghts.
         */
        if (results.items.length === options.length) {
            resolve({ ...results, items: results.items.sort(sortResults) });
        }
    });
