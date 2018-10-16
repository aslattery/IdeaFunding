/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
    render() {
        return (
            <html {...this.props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            <link href="//fonts.googleapis.com/css?family=Roboto:300,400|Roboto+Mono" rel="stylesheet" />
                <link rel="icon" href="https://ideafunding.xyz/favicon/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" sizes="180x180" href="https://ideafunding.xyz/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://ideafunding.xyz/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://ideafunding.xyz/favicon/favicon-16x16.png" />
                <link rel="mask-icon" href="https://ideafunding.xyz/favicon/safari-pinned-tab.svg" color="#95C349" />
                <meta name="apple-mobile-web-app-title" content="IdeaFunding" />
                <meta name="application-name" content="IdeaFunding" />
                <meta name="msapplication-TileColor" content="#95C349" />
                <meta name="theme-color" content="#95C349" />
                {this.props.headComponents}
            </head>
            <body {...this.props.bodyAttributes}>
                {this.props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: this.props.body }}
                />
                {this.props.postBodyComponents}
            </body>
            </html>
        );
    }
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
