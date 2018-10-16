import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';

const VotingOptions = () => (
    <dl className="cls rules">
        <dd>Rules:</dd>
        <dt>One vote recorded per phone number</dt>
        <dt>Change your vote by texting another code</dt>
    </dl>
);

VotingOptions.propTypes = {};

export default VotingOptions;
