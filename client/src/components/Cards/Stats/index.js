// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.067);
    border-radius: 0.66rem;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.067);
    display: flex;
    flex-basis: 48%;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 0 0.66rem 0;
    padding: 1.66rem;
    user-select: none;
`;

const Value = styled.span`
    color: ${(props) => props.theme.colors.text.default};
    font-family: 'Roboto Mono', monospace;
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0.66rem 0 0 0;
    text-align: center;
`;

const Title = styled.span`
    color: ${(props) => props.theme.colors.text.default};
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0.66rem 0;
`;

class StatCard extends PureComponent {
    render = () => (
        <Card>
            <Value>{this.props.value.toLocaleString()}</Value>
            <Title>{this.props.title}</Title>
        </Card>
    );
}

StatCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default StatCard;
