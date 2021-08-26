import React, { useState } from 'react';
import { FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";
import firebase from "@firebase/app"

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

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
                    Sign In
                </DialogTitle>
                <DialogContent>
                    <List component="nav" aria-label="contacts">
                        <ListItem button onClick={() => {
                            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                            firebase.auth().signInWithPopup(googleAuthProvider);
                        }}>
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary="Google" />
                        </ListItem>

                        <ListItem button onClick={() => {
                            const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
                            firebase.auth().signInWithPopup(facebookAuthProvider);
                        }}>
                            <ListItemIcon>
                                <FacebookIcon />
                            </ListItemIcon>
                            <ListItemText primary="Facebook" />
                        </ListItem>

                        <ListItem button onClick={() => {
                            const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
                            firebase.auth().signInWithPopup(twitterAuthProvider);
                        }}>
                            <ListItemIcon>
                                <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Twitter" />
                        </ListItem>

                        <ListItem button onClick={() => {
                            const githubAuthProvider = new firebase.auth.GithubAuthProvider();
                            firebase.auth().signInWithPopup(githubAuthProvider);
                        }}>
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="Github" />
                        </ListItem>
                    </List>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default LoginButton