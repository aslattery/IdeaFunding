import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';
import Logos from './../Logos';

const Header = () => (
    <header className="header">
        <Logos />
    </header>
);

Header.propTypes = {};

export default Header;
