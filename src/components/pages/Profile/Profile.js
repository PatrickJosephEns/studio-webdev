import React from 'react';

import { FirebaseAuthConsumer } from "@react-firebase/auth";
import firebase from "@firebase/app"

import ReadUserStores from '../../store/store-crud/ReadCurrentUserStores';
import CreateStore from '../../store/store-crud/CreateStoreForm';
import { Typography, Container, Avatar } from '@material-ui/core';
import UserInformation from './user-info/UserInformation';
import "./Profile.css"

class Profile extends React.Component {
    render() {
        return <FirebaseAuthConsumer>
            {({ isSignedIn }) => {
                if (!isSignedIn) {
                    return <Typography>Log in to view your profile</Typography>
                }
                return <>
                    <div class="profile">
                        <Container>
                            <h1>{firebase.auth().currentUser.displayName}'s Profile</h1>
                            <Avatar className="avatarImg" src={firebase.auth().currentUser.photoURL}></Avatar>
                            <UserInformation db={this.props.db}/>
                            <CreateStore db={this.props.db} />
                            <ReadUserStores db={this.props.db} />
                        </Container>
                    </div>
                </>
            }}
        </FirebaseAuthConsumer>

    }
}

export default Profile