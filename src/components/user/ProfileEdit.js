import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import firebase from "@firebase/app"

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StoreForm from './StoreForm';

function ProfileEdit(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button color="secondary" size="small" variant="contained" onClick={handleClickOpen}>
                Edit Profile
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {firebase.auth().currentUser.displayName}'s Profile
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To delete your store, just press Delete. WARNING: This can not be undone
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        props.db.collection("stores").doc(props.data.id).delete();
                        handleClose();
                    }} color="secondary" variant="contained">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ProfileEdit