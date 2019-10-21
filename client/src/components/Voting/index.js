// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withFirebase } from './../../contexts/Firebase';
import { getVotingSettings } from './../../methods/getVotingSettings';
import { getPollConfig } from './../../methods/getPollConfig';
import Loading from './../Loading';
import VotingInstructions from './Instructions';
import VotingOptions from './Options';
import VotingRules from './Rules';
import VotingEnabled from './Enabled';

// eslint-disable-next-line no-unused-vars
const d = require('debug')('suptuc:Voting');

class Voting extends PureComponent {
    state = {
        error: {},
        pollConfig: {}
    };

    componentDidMount = () => {
        const db = this.props.firebase.firestore();
        let pollConfig;
        getVotingSettings(db)
            // eslint-disable-next-line space-before-function-paren
            .then(async (votingSettings) => {
                pollConfig = await getPollConfig(votingSettings);
                this.setState({
                    pollConfig
                });
            })
            .catch((err) => this.setState({ error: err }));
    };

    render = () => {
        const { error, pollConfig } = this.state;

        if (!Object.keys(pollConfig).length) {
            return <Loading />;
        }

        if (Object.keys(error).length) {
            return (
                <pre>
                    Something went wrong... please try again.
                    <br />
                    Error: {JSON.stringify(error, null, 2)}
                </pre>
            );
        }

        return (
            <React.Fragment>
                <VotingInstructions number={pollConfig.phoneNumber} />
                <VotingEnabled enabled={pollConfig.votingEnabled} />
                <VotingOptions
                    number={pollConfig.phoneNumber}
                    options={pollConfig.options}
                />
                <VotingRules />
            </React.Fragment>
        );
    };
}

Voting.propTypes = {
    firebase: PropTypes.object
};

export default withFirebase(Voting);
