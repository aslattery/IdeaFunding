import React from 'react';
import Helmet from 'react-helmet';

import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './../../conf.d/firebase.conf';
!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const dbOpts = {
    timestampsInSnapshots: true,
};
db.settings(dbOpts);

import DefaultLayout from './../layouts/unauthenticated';
import VotingStatCards from './../components/Voting/StatCards';
import VotingOptions from './../components/Voting/Options';
import VotingRules from './../components/Voting/Rules';

const options = [
    'PITCH1',
    'PITCH2',
    'PITCH3',
    'PITCH4',
    'PITCH5',
    'PITCH6'
];

class ResultsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            totalVotes: 0,
            uniqueVotes: 0,
            votes: {},
        };

        let voteCounts = {};
        let totalVotes = 0;
        let uniqueVoters = 0;
        options.map((opt) => {
            db.collection("votes").where("option", "==", opt).onSnapshot((data) => {
                voteCounts[opt] = data.size;
                totalVotes = totalVotes + data.size;
                this.setState({
                    totalVotes,
                    voteCounts,
                });
            });
        });
        db.collection("voters").onSnapshot((data) => {
            this.setState({
                uniqueVoters: data.size,
            });
        });

    }

    render() {

        return (
            <DefaultLayout>
                <Helmet>
                    <title>IdeaFunding 2018 Results</title>
                </Helmet>
                <main>
                    <VotingStatCards
                        votes={this.state.totalVotes}
                        uniques={this.state.uniqueVotes}
                    />
                </main>
            </DefaultLayout>
        );
    }

}

export default ResultsPage;
