// eslint-disable-next-line no-unused-vars
const d = require('debug')('suptuc:getResults');

export const sortResults = (a, b) => b.votes - a.votes;

// eslint-disable-next-line space-before-function-paren
export const getResults = (poll) =>
    new Promise((resolve, reject) => {
        let results = {
            items: [],
            votes: poll.totalVotes || 0,
            voters: Object.keys(poll.votes).length || 0
        };
        /**
         * First, let's map over our options, and query the votes that match.
         */
        poll.options.map((option, i) => {
            d(`%s: %s (%s)`, i, option.name, option.shortcode);
            results.items.push({
                ...option,
                votes:
                    Object.values(poll.votes).filter(
                        (vote) => vote === option.shortcode
                    ).length || 0
            });
        });

        /**
         * Sort, and then return our results once we have matching options and
         * result lenghts.
         */
        if (results.items.length === poll.options.length) {
            resolve({ ...results, items: results.items.sort(sortResults) });
        }
    });
