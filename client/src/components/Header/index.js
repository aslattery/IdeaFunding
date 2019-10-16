// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
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

class Header extends PureComponent {
    render = () => (
        <HeaderActual>
            <IdeaFundingLogo
                src={`/img/logos/ideafunding.png`}
                alt={`IdeaFunding powered by Startup Tucson`}
            />
        </HeaderActual>
    );
}

export default Header;
