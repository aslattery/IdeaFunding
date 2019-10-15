// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VotingInstructions from './Instructions';
import VotingOptions from './Options';
import VotingRules from './Rules';

class Voting extends PureComponent {
    render = () => {
        return (
            <React.Fragment>
                <VotingInstructions />
                <VotingOptions />
                <VotingRules />
            </React.Fragment>
        );
    };
}

Voting.propTypes = {};

export default Voting;
