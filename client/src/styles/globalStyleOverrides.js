/*
 *  Global Style Overrides
 */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyleOverrides = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #FFFFFF;
        color: #606060;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;;
        margin: 0;
        padding: 0;
    }
    .grecaptcha-badge { visibility: hidden; }
`;
