import React, { useState } from 'react';

// Material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import StoreForm from './EditForm';

function EditButton(props) {
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
                Editing {props.store_name}
            </DialogTitle>

            <DialogContent>
                <StoreForm db={props.db} id={props.id}/>
            </DialogContent>

            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Exit
                </Button>
                
            </DialogActions>
        </Dialog>
    </>
}

export default EditButton