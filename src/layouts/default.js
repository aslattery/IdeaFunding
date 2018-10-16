import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import './../styles/global.less';
import Header from './../components/Header';
import Wrapper from './../components/Wrapper';

import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './../../conf.d/firebase.conf';

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

class DefaultLayout extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                navigate('/login');
                return null;
            }
            user.getIdTokenResult().then((tkn) => {
                if (typeof tkn.claims.sudo === 'undefined' || !tkn.claims.sudo) {
                    navigate('/login');
                    return null;
                }
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <Wrapper>
                    <Header />
                    {this.props.children}
                </Wrapper>
            </React.Fragment>
        );
    }
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
