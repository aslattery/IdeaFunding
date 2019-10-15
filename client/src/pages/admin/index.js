// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import AdminLayout from './../../layouts/Admin';

const AdminPage = ({ location }) => (
    <AdminLayout location={location}>
        <div />
    </AdminLayout>
);

AdminPage.propTypes = {
    location: PropTypes.object
};

export default AdminPage;
