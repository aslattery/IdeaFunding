// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HivemetricLogo from './../Branding/HivemetricLogo';

const FooterActual = styled.footer`
    border-top: 1px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.667rem 0;
    padding: 1.667rem 0;
`;

const PoweredBy = styled.h3`
    color: ${(props) => props.theme.colors.text.default};
    font-size: 1rem;
    font-weight: 400;
    margin: 0.66rem 0 1.337rem 0;
    ${(props) => props.theme.responsive.sff} {
        font-size: 0.9rem;
    }
    user-select: none;
`;

const HiveLogo = styled(HivemetricLogo)`
    width: 13.37rem;
    ${(props) => props.theme.responsive.sff} {
        width: 10rem;
    }
`;

class Footer extends PureComponent {
    render = () => (
        <FooterActual>
            <PoweredBy>Developed &amp; sponsored by</PoweredBy>
            <a
                href="https://www.hivemetric.com/?utm_source=vote.ideafunding.org&utm_medium=event_sponsorship&utm_campaign=ideafunding2019"
                rel="noopener noreferrer"
                target="_blank"
            >
                <HiveLogo />
            </a>
        </FooterActual>
    );
}

Footer.propTypes = {};

export default Footer;
