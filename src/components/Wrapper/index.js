import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';

const Wrapper = ({children}) => (
    <div className="w">
        {children}
    </div>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
