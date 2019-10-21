import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import FirebaseContextContainer from './src/contexts/Firebase';
import { GlobalStyleOverrides } from './src/styles/globalStyleOverrides';
import DefaultTheme from './src/styles/theme';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element, props }) => {
    return (
        <FirebaseContextContainer>
            <Helmet
                defaultTitle="Startup Tucson's IdeaFunding People's Choice Award"
                titleTemplate="%s | Powered by Hivemetric"
                defer={false}
            />
            <ThemeProvider theme={DefaultTheme}>
                <GlobalStyleOverrides />
                {element}
            </ThemeProvider>
        </FirebaseContextContainer>
    );
};
