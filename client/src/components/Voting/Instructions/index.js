// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import AwardIllustration from './../../Illustrations/Award';

const InstructionCard = styled.div`
    background-color: ${(props) =>
        lighten(0.45, props.theme.colors.brand.primary)};
    border: 2px solid
        ${(props) => lighten(0.3667, props.theme.colors.brand.primary)};
    border-radius: 0.66rem;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.067);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2.33rem 0;
    padding: 1.66rem 0.66rem;
    user-select: none;
    ${(props) => props.theme.responsive.sff} {
        margin: 0.66rem 0 1.66rem 0;
    }
`;

const Illustration = styled(({ ...rest }) => <AwardIllustration {...rest} />)`
    height: 15rem;
    margin: 0 0 1.66rem 0;
    ${(props) => props.theme.responsive.sff} {
        height: auto;
        margin: 0 0 1.66rem 0;
    }
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
    font-family: 'Roboto Mono', monospace;
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
        const { number } = this.props;

        // Format the number for display
        let formattedNumber = String(number);
        formattedNumber = (formattedNumber.length > 10
            ? formattedNumber.substr(1)
            : formattedNumber
        )
            .replace(/[^\d]/g, '')
            .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

        return (
            <InstructionCard>
                <Illustration />
                <Heading>
                    To vote for your favorite pitch,
                    <br />
                    text their code to:
                </Heading>
                <VotingPhoneNumber>{formattedNumber}</VotingPhoneNumber>
            </InstructionCard>
        );
    };
}

VotingInstuctions.propTypes = {
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default VotingInstuctions;
