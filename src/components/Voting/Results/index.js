import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';

const VotingResults = ({data, totalVotes}) => {
    let res = null;
    if (typeof data !== 'undefined') {
        let ok = Object.keys(data);
        let sk = ok.sort((a, b) => {
            return data[b] - data[a];
        });
        res = sk.map((k, v) => (
            <div key={k} className="result">
                <h4>{k}</h4>
                <span>{data[k]}</span>
                <div style={{ width: totalVotes === 0 ? '0%' : `${(data[k]/totalVotes)*100}%`, }}>&nbsp;</div>
            </div>
        ));
    }
    return (
        <div className="results">
            {res}
        </div>
    );
};

VotingResults.propTypes = {
    data: PropTypes.object,
    totalVotes: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default VotingResults;
