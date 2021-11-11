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
                    Delete {props.data.text}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To delete your item, just press Delete. WARNING: This can not be undone
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        // Access store entry
                        console.log(props.store_id);
                        console.log(props.data.id);
                        props.db.collection("stores").doc(props.store_id).collection('items').doc(props.data.id).delete();

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
