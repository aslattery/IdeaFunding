import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';

const VotingStatCards = ({votes, uniques}) => (
    <div className="statCards">
        <div className="card">
            <h2>Total Votes</h2>
            <span>{votes.toLocaleString()}</span>
        </div>
        <div className="card">
            <h2>Unique Voters</h2>
            <span>{uniques.toLocaleString()}</span>
        </div>
    </div>
);

VotingStatCards.propTypes = {
    votes: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    uniques: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default VotingStatCards;
