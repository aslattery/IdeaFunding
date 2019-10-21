// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withFirebase } from './../../contexts/Firebase';
import { getVotingSettings } from './../../methods/getVotingSettings';
import { getPollConfig } from './../../methods/getPollConfig';
import { getResults } from './../../methods/getResults';
import Loading from './../Loading';
import StatsCard from './../Cards/Stats';
import ItemRow from './ItemRow';

// eslint-disable-next-line no-unused-vars
const d = require('debug')('suptuc:Results');

const StatsGrid = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const ResultsGrid = styled.section``;

class Results extends PureComponent {
    state = {
        error: {},
        pollConfig: {},
        results: {
            items: [],
            votes: 0,
            voters: 0
        }
    };

    componentDidMount = () => {
        const db = this.props.firebase.firestore();
        let pollConfig = {};
        let results = {};
        getVotingSettings(db)
            // eslint-disable-next-line space-before-function-paren
            .then(async (votingSettings) => {
                pollConfig = await getPollConfig(votingSettings);
                results = await getResults(pollConfig);
                this.setState(
                    {
                        pollConfig,
                        results
                    },
                    () => this.realtimeResults(votingSettings.poll)
                );
            })
            .catch((err) => this.setState({ error: err }));
    };

    realtimeResults = (pollRef) => {
        let results = {};
        // eslint-disable-next-line space-before-function-paren
        pollRef.onSnapshot(async (newData) => {
            d(`New pollData snapshot`);
            results = await getResults(newData.data());
            this.setState({
                results
            });
        });
    };

    render = () => {
        const { error, pollConfig, results } = this.state;

        if (!Object.keys(pollConfig).length || !results?.items.length) {
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
                <StatsGrid>
                    <StatsCard title={`Votes`} value={results.votes} />
                    <StatsCard title={`Voters`} value={results.voters} />
                </StatsGrid>
                <ResultsGrid>
                    {results.items.length &&
                        results.items.map((item, i) => (
                            <ItemRow
                                key={`ir_${item.name}`}
                                name={item.name}
                                votes={item?.votes}
                                ratio={
                                    !results?.voters
                                        ? 0
                                        : Math.floor(
                                              (item.votes / results.voters) *
                                                  100,
                                              2
                                          )
                                }
                            />
                        ))}
                </ResultsGrid>
            </React.Fragment>
        );
    };
}

Results.propTypes = {
    firebase: PropTypes.object
};

export default withFirebase(Results);
