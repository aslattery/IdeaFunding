// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import DefaultLayout from './../../layouts/Default';
import Results from './../../components/Results';

const ResultsPage = ({ location }) => (
    <DefaultLayout location={location}>
        <Helmet title={`Results`} />
        <Results />
    </DefaultLayout>
);

ResultsPage.propTypes = {
    location: PropTypes.object
};

export default ResultsPage;
