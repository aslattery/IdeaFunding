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
    render = () => {
        const { number, options } = this.props;

        return (
            <VotingOptionGrid>
                {options.length &&
                    options.map((option, i) => (
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
