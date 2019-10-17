// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled(({ ...rest }) => <a {...rest} />)`
    flex-basis: 46%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => props.theme.colors.brand.primary};
    background: linear-gradient(
        337deg,
        ${(props) => props.theme.colors.brand.primary} 0%,
        ${(props) => props.theme.colors.brand.secondary} 50%
    );
    border-radius: 0.66rem;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.067);
    color: white;
    font-size: 1rem;
    margin: 1.33rem 0;
    padding: 1.66rem;
    text-align: center;
    text-decoration: none;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.117);
    span {
        font-family: 'Roboto Mono', monospace;
        font-size: 1.667rem;
        margin: 0 0 0.337rem 0;
    }
    ${(props) => props.theme.responsive.sff} {
        flex-basis: 100%;
        margin: 0.66rem 0;
        &:last-child {
            margin-bottom: 1.66rem;
        }
    }
    ${(props) => props.theme.responsive.desktop} {
        flex-basis: 30%;
        margin: 0.667rem;
    }
`;

class VotingOptionsButton extends PureComponent {
    render = () => {
        const { option, ...props } = this.props;

        return typeof option === 'object' ? (
            <Button
                href={`sms:${option?.number};?&body=${option?.shortcode}`}
                {...props}
            >
                <span>{option?.shortcode}</span>
                {option?.name}
            </Button>
        ) : null;
    };
}

VotingOptionsButton.propTypes = {
    option: PropTypes.object
};

export default VotingOptionsButton;
