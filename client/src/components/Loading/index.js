// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import DefaultTheme from './../../styles/theme';

class Loading extends PureComponent {
    render = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke={DefaultTheme.colors.brand.primary}
            viewBox="0 0 44 44"
            style={{
                margin: '1.66rem auto'
            }}
            {...this.props}
        >
            <g fill="none" fillRule="evenodd" strokeWidth="2">
                <circle cx="22" cy="22" r="1">
                    <animate
                        attributeName="r"
                        begin="0s"
                        dur="1.8s"
                        values="1; 20"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.165, 0.84, 0.44, 1"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stroke-opacity"
                        begin="0s"
                        dur="1.8s"
                        values="1; 0"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.3, 0.61, 0.355, 1"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="22" cy="22" r="1">
                    <animate
                        attributeName="r"
                        begin="-0.9s"
                        dur="1.8s"
                        values="1; 20"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.165, 0.84, 0.44, 1"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="stroke-opacity"
                        begin="-0.9s"
                        dur="1.8s"
                        values="1; 0"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.3, 0.61, 0.355, 1"
                        repeatCount="indefinite"
                    />
                </circle>
            </g>
        </svg>
    );
}

Loading.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string
};

Loading.defaultProps = {
    height: `10rem`,
    width: `10rem`
};

export default Loading;
