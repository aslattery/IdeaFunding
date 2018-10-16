import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';

const VotingButton = ({code}) => (
    <a
        className="btn"
        href={`sms:9302003100?body=${code}`}
    >{code}</a>
);

VotingButton.propTypes = {
    code: PropTypes.string.isRequired,
};

export default VotingButton;
