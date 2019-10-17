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
    margin: 1rem 0 2.33rem 0;
    padding: 0.66rem 0.66rem 1.66rem 0.66rem;
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

const FlexRow = styled.div`
    ${(props) => props.theme.responsive.desktop} {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
    }
`;

const FlexBlock = styled(({ ...rest }) => <div {...rest} />)`
    ${(props) => props.theme.responsive.desktop} {
        display: flex;
        flex-basis: 50%;
        flex-direction: column;
    }
`;

const Heading = styled(({ desktopOnly, ...rest }) => <h1 {...rest} />)`
    color: ${(props) => darken(0.3, props.theme.colors.brand.primary)};
    font-size: 1.2rem;
    font-weight: 400;
    margin: ${(props) => (props.desktopOnly ? `0.667rem 0 0 0` : `0`)};
    text-align: center;
    ${(props) => props.theme.responsive.sff} {
        font-size: 1rem;
    }
    span {
        ${(props) => props.theme.responsive.device} {
            display: ${(props) => (!props.desktopOnly ? `block` : `none`)};
            visibility: ${(props) =>
                !props.desktopOnly ? `visible` : `hidden`};
        }
        font-size: 1.867rem;
        margin: 0.667rem 0 0 0;
    }
`;

const VotingPhoneNumber = styled.h2`
    color: ${(props) => props.theme.colors.brand.primary};
    font-family: 'Roboto Mono', monospace;
    font-size: 1.867rem;
    font-weight: 400;
    margin: 0.66rem 0 0 0;
    text-align: center;
    ${(props) => props.theme.responsive.sff} {
        font-size: 1.667rem;
    }
`;

class VotingInstuctions extends PureComponent {
    render = () => {
        const { number, votingEnabled } = this.props;

        // Format the number for display
        let formattedNumber = String(number);
        formattedNumber = (formattedNumber.length > 10
            ? formattedNumber.substr(1)
            : formattedNumber
        )
            .replace(/[^\d]/g, '')
            .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

        return votingEnabled ? (
            <InstructionCard>
                <Illustration />
                <FlexRow>
                    <FlexBlock>
                        <Heading>
                            To vote for your favorite pitch,
                            <br />
                            text their code to:
                        </Heading>
                        <VotingPhoneNumber>{formattedNumber}</VotingPhoneNumber>
                    </FlexBlock>
                    <FlexBlock>
                        <Heading desktopOnly>
                            Or tap to vote from
                            <br />
                            your mobile device:
                            <br />
                            <span>vote.ideafunding.org</span>
                        </Heading>
                    </FlexBlock>
                </FlexRow>
            </InstructionCard>
        ) : (
            <InstructionCard>
                <Illustration />
                <Heading>
                    Voting isn&apos;t available right now,
                    <br />
                    please check back shortly!
                </Heading>
            </InstructionCard>
        );
    };
}

VotingInstuctions.propTypes = {
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    votingEnabled: PropTypes.bool
};

export default VotingInstuctions;
