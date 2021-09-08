import React from 'react';

import { FirebaseAuthConsumer } from "@react-firebase/auth";

import ReadUserStores from '../../store/store-crud/ReadCurrentUserStores';
import CreateStore from '../../store/store-crud/CreateStoreForm';
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