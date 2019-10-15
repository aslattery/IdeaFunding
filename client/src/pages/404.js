// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from './../layouts/Default';

const Error404Page = ({ location }) => (
    <DefaultLayout location={location}>
        <div>404</div>
    </DefaultLayout>
);

Error404Page.propTypes = {
    location: PropTypes.object
};

export default Error404Page;
