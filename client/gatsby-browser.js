import gatsbyFirebaseAndThemeProvider from './gatsby-firebase-and-theme-provider';
import { cwe } from './src/utilities/cwe';
import { checkForStorage } from './src/utilities/checkForStorage';

/**
 * Enables our debug statements, if a non-production environment is detected.
 */
if (
    typeof window !== 'undefined' &&
    !cwe(`production`) &&
    checkForStorage(`localStorage`)
) {
    window.localStorage.debug = 'suptuc:*';
}

export const wrapRootElement = gatsbyFirebaseAndThemeProvider;
