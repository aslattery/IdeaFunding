# IdeaFunding Web Client

🗳️ Voting page and results reporting for the People's Choice Award at Startup Tucson's IdeaFunding pitch competition.

## Setup your development environment

Prior to cloning this repository, we recommend having Node v10+ installed, and a text editor/IDE that includes support for `eslint` and `prettier`.

### Install packages

```bash
yarn install
```

### Start the development server

Thanks to Gatsby's webpack configuration, hot-module replacement (HMR) is supported by default, meaning changes you make locally will appear instantaneously in your browser. By default, we assign the port `8683` to the development server, meaning you can access the application at `http://localhost:8683/`.

```bash
yarn develop
```

## Building for production

It couldn't be easier to have a nice prebundled static site that you can drop into almost any static hosting provider:

```bash
yarn build
```

### Testing the production build locally

You can also test the production build of your site by using the built in development server, with all optimizations for production enabled, by running:

```bash
yarn serve
```

## Deploying to Firebase Hosting

For the purposes of IdeaFunding 2019, we setup `vote.ideafunding.org` to be a Firebase Hosting site. Please refer to the [Firebase Hosting documentation](https://firebase.google.com/docs/hosting/) for specific information, such as how to setup a [custom domain](https://firebase.google.com/docs/hosting/custom-domain).

This project includes an example `firebase.json` and `.firebaserc` in the repository root. By using the Firebase CLI (`firebase-tools` on NPM), once you have authenticated and setup your Firebase project information, you can deploy new builds of this application simply by running:

```bash
yarn build

# Deploy from the repository root
cd ../

firebase deploy --only hosting
```

## Technologies and platforms used

-   React via ES6/Javascript, with Babel for transpilation
-   [Gatsby](https://www.gatsbyjs.org/) for building our static PWA, including several plugins (see `gatsby-config.js`) to customize the build process
-   [Google's Firebase](https://firebase.google.com/), specifically:
    -   Analytics, to capture web visitor information
    -   Authentication, to gate some features for "admin" users only (coming soon)
    -   Cloud Firestore, for document database and realtime listeners
    -   Hosting, to serve our generated PWA
    -   Remote Config, for server side changes without requiring a new build
-   [Styled Components](https://www.styled-components.com/) for using CSS-in-JS to style our components
