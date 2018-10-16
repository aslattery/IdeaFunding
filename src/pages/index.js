import React from 'react';
import Helmet from 'react-helmet';

import DefaultLayout from './../layouts/unauthenticated';
import VotingInstructions from './../components/Voting/Instructions';
import VotingOptions from './../components/Voting/Options';
import VotingRules from './../components/Voting/Rules';

const Homepage = () => (
    <DefaultLayout>
        <Helmet>
            <title>IdeaFunding 2018, powered by Startup Tucson</title>
        </Helmet>
        <main>
            <VotingInstructions />
            <VotingOptions />
            <VotingRules />
        </main>
    </DefaultLayout>
);

export default Homepage;
