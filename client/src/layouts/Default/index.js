// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './../../components/Header';
import Footer from './../../components/Footer';

// eslint-disable-next-line no-unused-vars
const d = require('debug')('suptuc:DefaultLayout');

const Layout = styled.div``;

class DefaultLayout extends PureComponent {
    render = () => {
        const { children, initialized, location, ...rest } = this.props;

        if (!initialized) {
            return null;
        }

        return (
            <Layout {...rest}>
                <Header />
                {children}
                <Footer />
            </Layout>
        );
    };
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    initialized: PropTypes.bool,
    location: PropTypes.object
};

DefaultLayout.defaultProps = {
    initialized: false
};

export default DefaultLayout;
