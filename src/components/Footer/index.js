import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';

const Footer = () => (
    <footer className="footer">
        <p>Voting platform developed by</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 844 163.3">
            <g className="st0"><path className="st1" d="M72 42.1H25.6L2.3 82.3l23.3 40.3H72l23.2-40.3z"/></g>
            <path className="st2" d="M95.2 1.5H48.8L25.6 41.7 48.8 82h46.4l23.2-40.3z"/>
            <path className="st2" d="M141.4 1.5H95L71.8 41.7 95 82h46.4l23.2-40.3z"/>
            <g className="st0"><path className="st1" d="M94.8 82H48.4l-23.2 40.2 23.2 40.3h46.4l23.2-40.3z"/></g>
            <path opacity=".85" fill="#ff9018" d="M164.6 42.1h-46.4L95 82.4l23.2 40.2h46.4l23.2-40.2z"/>
            <path opacity=".85" fill="#007ead" d="M141.6 82H95.2L72 122.2l23.2 40.3h46.4l23.2-40.3z"/>
            <path className="st1" d="M275 132.1h-13V74.5h-36.5v57.6h-13V34.2h13v39.7c.1-1.7.5-3.4 1.2-4.9.7-1.5 1.6-2.9 2.8-4 1.2-1.1 2.5-2 4.1-2.7 1.5-.6 3.2-1 5-1H262c1.8 0 3.5.3 5.1 1 1.6.7 3 1.6 4.2 2.8 1.2 1.2 2.1 2.6 2.8 4.2.7 1.6 1 3.3 1 5.1v57.7zM286.6 34.2H301v13.6h-14.4V34.2zm13.8 27.2v70.7h-13.1V61.4h13.1zM332.7 132.1l-28.3-70.7H318l21.4 55.1L361 61.4h13.6l-28.3 70.7h-13.6zM437.9 103.4h-46.8V119h46.8v13.1h-46.8c-1.8 0-3.5-.3-5-1-1.6-.7-3-1.6-4.2-2.8-1.2-1.2-2.1-2.6-2.8-4.2-.7-1.6-1-3.3-1-5.1V74.5c0-1.8.3-3.5 1-5.1.7-1.6 1.6-3 2.8-4.2 1.2-1.2 2.6-2.1 4.2-2.8 1.6-.7 3.3-1 5-1h33.7c1.8 0 3.5.3 5.1 1 1.6.7 3 1.6 4.2 2.8 1.2 1.2 2.1 2.6 2.8 4.2.7 1.6 1 3.3 1 5.1v28.9zm-46.8-28.9v15.9h33.7V74.5h-33.7zM505.5 74.5v57.6h-13.1V74.5h-29.9v57.6h-13V61.4h13v12.5c.1-1.7.5-3.4 1.2-4.9.7-1.5 1.6-2.9 2.8-4 1.2-1.1 2.5-2 4.1-2.7 1.5-.6 3.2-1 5-1h16.9c1.7 0 3.4.3 4.9 1 1.5.6 2.9 1.5 4.1 2.7 1.2 1.1 2.2 2.5 2.9 4s1.1 3.2 1.2 4.9c.1-1.7.5-3.4 1.2-4.9.7-1.5 1.6-2.9 2.8-4 1.2-1.1 2.5-2 4.1-2.7 1.5-.6 3.2-1 5-1h16.9c1.8 0 3.5.3 5.1 1 1.6.7 3 1.6 4.2 2.8 1.2 1.2 2.1 2.6 2.8 4.2.7 1.6 1 3.3 1 5.1V132h-13.1V74.5h-30.1zM619.9 103.4h-46.8V119h46.8v13.1h-46.8c-1.8 0-3.5-.3-5-1-1.6-.7-3-1.6-4.2-2.8-1.2-1.2-2.1-2.6-2.8-4.2-.7-1.6-1-3.3-1-5.1V74.5c0-1.8.3-3.5 1-5.1.7-1.6 1.6-3 2.8-4.2 1.2-1.2 2.6-2.1 4.2-2.8 1.6-.7 3.3-1 5-1h33.7c1.8 0 3.5.3 5.1 1 1.6.7 3 1.6 4.2 2.8 1.2 1.2 2.1 2.6 2.8 4.2.7 1.6 1 3.3 1 5.1v28.9zm-46.8-28.9v15.9h33.7V74.5h-33.7zM627.4 61.4h17.3V39.6h13.1v21.8H681v13.1h-23.2V119H681v13.1h-23.2c-1.8 0-3.5-.3-5-1-1.6-.7-3-1.6-4.2-2.8-1.2-1.2-2.1-2.6-2.8-4.2-.7-1.6-1-3.3-1-5.1V74.5h-17.3V61.4zM705.5 74.5v57.6h-13V61.4h13v12.5c.1-1.7.5-3.4 1.2-4.9.7-1.5 1.6-2.9 2.8-4 1.2-1.1 2.5-2 4.1-2.7 1.5-.6 3.2-1 5-1h13.9c1.8 0 3.5.3 5.1 1 1.6.7 3 1.6 4.2 2.8 1.2 1.2 2.1 2.6 2.8 4.2.7 1.6 1 3.3 1 5.1v12h-13.1v-12h-27zM751.7 34.2h14.4v13.6h-14.4V34.2zm13.7 27.2v70.7h-13.1V61.4h13.1zM790.7 74.5V119h33.7v-12h13.1v12c0 1.8-.3 3.5-1 5.1-.7 1.6-1.6 3-2.8 4.2-1.2 1.2-2.6 2.1-4.2 2.8-1.6.7-3.3 1-5.1 1h-33.7c-1.8 0-3.5-.3-5-1-1.6-.7-3-1.6-4.2-2.8-1.2-1.2-2.1-2.6-2.8-4.2-.7-1.6-1-3.3-1-5.1V74.5c0-1.8.3-3.5 1-5.1.7-1.6 1.6-3 2.8-4.2 1.2-1.2 2.6-2.1 4.2-2.8 1.6-.7 3.3-1 5-1h33.7c1.8 0 3.5.3 5.1 1 1.6.7 3 1.6 4.2 2.8 1.2 1.2 2.1 2.6 2.8 4.2.7 1.6 1 3.3 1 5.1v12h-13.1v-12h-33.7z"/>
        </svg>
    </footer>
);

Footer.propTypes = {};

export default Footer;
