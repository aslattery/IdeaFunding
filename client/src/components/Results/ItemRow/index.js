// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ResultsProgressIndicator from './ProgressIndicator';

const ItemRow = styled.article`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 1.337rem 0;
`;

const ItemData = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Name = styled.span`
    color: ${(props) => props.theme.colors.text.default};
    font-size: 1.1rem;
    font-weight: 400;
`;

const Votes = styled.span`
    color: ${(props) => props.theme.colors.text.default};
    font-family: 'Roboto Mono', monospace;
    font-size: 1.2rem;
    font-weight: 400;
`;

class ResultsItemRow extends PureComponent {
    render = () => {
        const { name, votes, ratio } = this.props;
        return (
            <ItemRow>
                <ItemData>
                    <Name>{name}</Name>
                    <Votes>{votes?.toLocaleString()}</Votes>
                </ItemData>
                <ResultsProgressIndicator ratio={ratio} />
            </ItemRow>
        );
    };
}

ResultsItemRow.propTypes = {
    name: PropTypes.string,
    votes: PropTypes.number,
    ratio: PropTypes.number
};

export default ResultsItemRow;
