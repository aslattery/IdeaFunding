// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

const InstructionCard = styled.div`
    background-color: ${(props) =>
        lighten(0.42, props.theme.colors.brand.primary)};
    border: 2px solid
        ${(props) => lighten(0.3667, props.theme.colors.brand.primary)};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2.33rem 0;
    padding: 1.66rem 0.66rem;
    user-select: none;
`;

const Heading = styled.h1`
    color: ${(props) => darken(0.3, props.theme.colors.brand.primary)};
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
    text-align: center;
    ${(props) => props.theme.responsive.sff} {
        font-size: 1rem;
    }
`;

const VotingPhoneNumber = styled.h2`
    color: ${(props) => props.theme.colors.brand.primary};
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0.66rem 0 0 0;
    text-align: center;
    ${(props) => props.theme.responsive.sff} {
        font-size: 1.667rem;
    }
`;

class VotingInstuctions extends PureComponent {
    render = () => {
        return (
            <InstructionCard>
                <Heading>
                    To vote for your favorite pitch,
                    <br />
                    text your team&apos;s code to:
                </Heading>
                <VotingPhoneNumber>(000) 000-0000</VotingPhoneNumber>
            </InstructionCard>
        );
    };
}

VotingInstuctions.propTypes = {
    number: PropTypes.string
};

export default VotingInstuctions;
