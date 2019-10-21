// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.067);
    border-radius: 0.66rem;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    height: 10px;
    margin: 0.33rem 0 0 0;
    overflow: hidden;
`;

const ProgressBar = styled(({ width, ...rest }) => <div {...rest} />)`
    background-color: ${(props) => props.theme.colors.brand.primary};
    flex-basis: ${(props) => props.width || 0}%;
`;

class ResultsProgressIndicator extends PureComponent {
    render = () => (
        <ProgressContainer>
            <ProgressBar width={this.props.ratio} />
        </ProgressContainer>
    );
}

ResultsProgressIndicator.propTypes = {
    ratio: PropTypes.number
};

export default ResultsProgressIndicator;
