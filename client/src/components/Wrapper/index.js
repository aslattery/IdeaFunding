// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 768px;
    margin: 0 auto;
    ${(props) => props.theme.responsive.device} {
        padding: 0 1.337rem;
    }
`;

class Wrapper extends PureComponent {
    render = () => <MainWrapper {...this.props} />;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default Wrapper;
