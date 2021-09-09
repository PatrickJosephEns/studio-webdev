import React, { useState } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import UserBioForm from './EditBioForm';

function EditBioButton(props) {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(null);
    };

    return <><Button onClick={() => { setOpen(!open) }} color="primary" size="small" variant="contained">
        Edit
    </Button>

        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                Editing Bio
            </DialogTitle>

            <DialogContent>
                <UserBioForm id={props.id} db={props.db}/>
            </DialogContent>

            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Exit
                </Button>
                
            </DialogActions>
        </Dialog>
    </>
}

export default EditBioButton