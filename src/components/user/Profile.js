import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import firebase from "@firebase/app"
// import './user_store.css'

import { FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";

import Button from '@material-ui/core/Button';
import ReadUserStores from './store/user_read';
import CreateStore from './store/create';
import { Typography } from '@material-ui/core';

class Profile extends React.Component {
    render() {
        return <FirebaseAuthConsumer>
            {({ isSignedIn }) => {
                if (!isSignedIn) {
                    return <Typography>Log in to view your profile</Typography>
                }
                return <>
                    <CreateStore db={this.props.db} />
                    <ReadUserStores db={this.props.db} />
                </>
            }}
        </FirebaseAuthConsumer>

    }
}

export default Profile