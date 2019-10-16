// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled(({ ...rest }) => <a {...rest} />)`
    flex-basis: 46%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.colors.brand.primary};
    border-radius: 1rem;
    color: white;
    font-size: 1.1337rem;
    margin: 1.33rem 0;
    padding: 1.66rem;
    text-decoration: none;
    span {
        font-family: 'Roboto Mono', monospace;
        font-size: 1.667rem;
        margin: 0 0 0.337rem 0;
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
