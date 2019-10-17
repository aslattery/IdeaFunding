// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderActual = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.667rem 0;
`;

const IdeaFundingLogo = styled.img`
    width: 25rem;
    ${(props) => props.theme.responsive.sff} {
        width: 18rem;
    }
`;

const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 1rem 0 0 0;
    width: 18rem;
`;

const NavLink = styled(({ theme, ...rest }) => <Link {...rest} />)`
    border-bottom: 2px solid rgba(0, 0, 0, 0.067);
    color: ${(props) => props.theme.colors.text.default};
    font-size: 1rem;
    font-weight: 400;
    padding: 0.42rem 0;
    text-align: center;
    text-decoration: none;
    &.active {
        border-color: ${(props) => props.theme.colors.brand.primary};
    }
`;

class Header extends PureComponent {
    render = () => (
        <HeaderActual>
            <IdeaFundingLogo
                src={`/img/logos/ideafunding.png`}
                alt={`IdeaFunding powered by Startup Tucson`}
            />
            <Navigation>
                <NavLink activeClassName={`active`} to={`/`}>
                    How to Vote
                </NavLink>
                <NavLink
                    activeClassName={`active`}
                    partiallyActive
                    to={`/results`}
                >
                    Results
                </NavLink>
            </Navigation>
        </HeaderActual>
    );
}

export default Header;
