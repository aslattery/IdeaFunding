// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from './../layouts/Default';
import Voting from './../components/Voting';

const IndexPage = ({ location }) => (
    <DefaultLayout location={location}>
        <Voting />
    </DefaultLayout>
);

IndexPage.propTypes = {
    location: PropTypes.object
};

export default IndexPage;
