// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withFirebase } from './../../contexts/Firebase';
import VotingInstructions from './Instructions';
import VotingOptions from './Options';
import VotingRules from './Rules';

// eslint-disable-next-line no-unused-vars
const d = require('debug')('suptuc:Voting');

class Voting extends PureComponent {
    state = {
        pollConfig: {}
    };
    // eslint-disable-next-line space-before-function-paren
    componentDidMount = async () => {
        const db = this.props.firebase.firestore();
        /**
         * Get the current poll ref from settings
         */
        const votingSettingsRef = await db
            .collection('settings')
            .doc('production');
        votingSettingsRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const votingSettings = doc.data();
                    d('Got votingSettings, %O', votingSettings);
                    /**
                     * Get the poll configuration
                     */
                    votingSettings.poll
                        .get()
                        .then((doc) => {
                            if (doc.exists) {
                                const pollConfig = doc.data();
                                d('Got pollConfig, %O', pollConfig);
                                this.setState(
                                    {
                                        pollConfig
                                    },
                                    d('Set pollConfig state')
                                );
                                return;
                            }
                            d(`pollConfig doesn't exist, or can't be fetched`);
                        })
                        .catch((err) => d('Failed to get pollConfig: %O', err));
                    return;
                }
                d(`votingSettings doesn't exist, or can't be fetched`);
            })
            .catch((err) => d('Failed to get /settings/production: %O', err));
    };

    render = () => {
        const { pollConfig, ...state } = this.state;

        if (!Object.keys(pollConfig).length) {
            return null;
        }

        return (
            <React.Fragment>
                <VotingInstructions number={pollConfig.phoneNumber} />
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
