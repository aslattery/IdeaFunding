// eslint-disable-next-line no-unused-vars
import React, { createContext, PureComponent } from 'react';
import PropTypes from 'prop-types';

import FirebaseConfig from './../../../firebase';

// eslint-disable-next-line no-unused-vars
const d = require('debug')('suptuc:FirebaseContext');

// Initialize a few variables here.
const FirebaseContext = createContext(null);
let CachedFirebaseInstance;

// Helper function to cache or initialize Firebase.
const getFirebaseInstance = (firebase) => {
    if (CachedFirebaseInstance) {
        return CachedFirebaseInstance;
    }

    firebase.initializeApp(FirebaseConfig.defaultProject);

    CachedFirebaseInstance = firebase;
    return firebase;
};

// withFirebase Higher Order Component (HOC) that injects our Firebase
// instance safely.
// eslint-disable-next-line react/display-name
export const withFirebase = (Component) => (props) => (
    <FirebaseContext.Consumer>
        {(firebase) => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

// FirebaseContextContainer, which mounts Firebase and initializes it.
class FirebaseContextContainer extends PureComponent {
    state = {
        firebase: null
    };

    componentDidMount() {
        /**
         * Need to add a new Firebase feature or library?
         * Import and add it to the initialization promise here.
         */
        const loadApp = import('firebase/app');
        const loadAnalytics = import('firebase/analytics');
        const loadAuth = import('firebase/auth');
        const loadFirestore = import('firebase/firestore');
        const loadRemoteConfig = import('firebase/remote-config');

        Promise.all([
            loadApp,
            loadAnalytics,
            loadAuth,
            loadFirestore,
            loadRemoteConfig
        ]).then((firebaseImports) => {
            const firebase = getFirebaseInstance(firebaseImports[0]);
            this.setState({ firebase }, () => {
                const remoteConfig = firebase.remoteConfig();
                remoteConfig.defaultConfig =
                    FirebaseConfig.remoteConfigDefaults;
                d(`Firebase Initialized (%s)`, !!firebase.apps.length);
            });
        });
    }

    render = () => {
        const { children } = this.props;
        const { firebase } = this.state;

        if (!firebase) {
            return null;
        }

        return (
            <FirebaseContext.Provider value={firebase}>
                {children}
            </FirebaseContext.Provider>
        );
    };
}

FirebaseContextContainer.propTypes = {
    children: PropTypes.node.isRequired,
    firebase: PropTypes.object
};

export default FirebaseContextContainer;
