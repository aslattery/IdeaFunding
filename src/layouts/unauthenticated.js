import React from 'react';
import PropTypes from 'prop-types';

import './../styles/global.less';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Wrapper from './../components/Wrapper';

const UnauthenticatedLayout = ({children}) => (
    <React.Fragment>
        <Wrapper>
            <Header />
            {children}
            <Footer />
        </Wrapper>
    </React.Fragment>
);

UnauthenticatedLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UnauthenticatedLayout;
