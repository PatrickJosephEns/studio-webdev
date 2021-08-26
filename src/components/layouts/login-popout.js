import React, { useState } from 'react';
import { FirestoreCollection } from 'react-firestore';
import { FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";


import firebase from "@firebase/app"


// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



function LoginButton(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                    if (!isSignedIn) {
                        return <Button variant="contained" color="primary" onClick={handleClickOpen}>Login</Button>
                    }
                    return <Button onClick={() => { firebase.auth().signOut() }} variant="contained" color="secondary">Log Out</Button>
                }}
            </FirebaseAuthConsumer>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Delete Store
                </DialogTitle>
                <DialogContent>
                    <Button>Sign in</Button>
                    <Button color="primary" size="small" variant="contained" onClick={() => {
                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(googleAuthProvider);
                      }}>Sign In with Google</Button>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default LoginButton