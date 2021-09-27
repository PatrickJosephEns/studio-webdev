import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



function DeleteButton(props) {
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
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Delete {props.data.store_name}
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
                        // Access store entry
                        props.db.collection("stores").doc(props.data.id).collection('items').get().then((querySnapshot) => {
                            // Loop through the query which is all the items
                            querySnapshot.forEach((doc) => {
                                doc.ref.delete()
                            })
                        })
                        // Finally delete the store
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

export default DeleteButton
