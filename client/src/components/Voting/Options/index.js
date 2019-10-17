// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const VotingOptionGrid = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: space-between;
`;

class VotingOptions extends PureComponent {
    /**
     * Shuffles array in place. Courtesy of https://stackoverflow.com/a/6274381
     * @param {Array} a items An array containing the items.
     */
    shuffleArray = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };

    render = () => {
        const { number, options } = this.props;

        return (
            <VotingOptionGrid>
                {options.length &&
                    this.shuffleArray(options).map((option, i) => (
                        <Button
                            key={`voteOpt_${option.shortcode}`}
                            option={{ ...option, number }}
                        />
                    ))}
            </VotingOptionGrid>
        );
    };
}

VotingOptions.propTypes = {
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    options: PropTypes.array
};

export default VotingOptions;
