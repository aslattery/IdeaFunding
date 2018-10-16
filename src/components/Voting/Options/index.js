import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';
import VotingButton from './../Button';

const opts = [
    'PITCH1',
    'PITCH2',
    'PITCH3',
    'PITCH4',
    'PITCH5',
    'PITCH6'
];

const VotingOptions = () => {
    let optionButtons = [];
    opts.map((opt) => {
        optionButtons.push(<VotingButton code={opt} />);
    });
    return (
        <div className="options">
            {optionButtons}
        </div>
    );
};

VotingOptions.propTypes = {};

export default VotingOptions;
