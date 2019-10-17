// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const SubHeading = styled.h3`
    color: ${(props) => props.theme.colors.text.default};
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0.66rem 0;
    ${(props) => props.theme.responsive.sff} {
        font-size: 1rem;
        text-align: center;
    }
    user-select: none;
`;

const List = styled.ul`
    list-style: inside circle;
    margin: 0;
    padding: 0;
    ${(props) => props.theme.responsive.sff} {
        margin: 0 auto;
    }
`;

const ListItem = styled.li`
    color: ${(props) => props.theme.colors.brand.primary};
    margin: 0 0 0.33rem 0;
    span {
        color: ${(props) => props.theme.colors.text.default};
    }
`;

class VotingRules extends PureComponent {
    render = () => (
        <React.Fragment>
            <SubHeading>
                <span>People&apos;s Choice Award Rules</span>
            </SubHeading>
            <List>
                <ListItem>
                    <span>One vote will be cast per phone number</span>
                </ListItem>
                <ListItem>
                    <span>Change your vote by texting another code</span>
                </ListItem>
                <ListItem>
                    <span>Message &amp; data rates may apply</span>
                </ListItem>
            </List>
        </React.Fragment>
    );
}

export default VotingRules;
