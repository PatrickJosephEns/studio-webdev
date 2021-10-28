import React, { useState } from 'react';

// Material UI
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddItemForm from './CreateItemForm';

function AddButton(props) {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(null);
    };

    return <><Button onClick={() => { setOpen(!open) }} color="primary" size="small" variant="contained">
        Add
    </Button>

        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                Adding to {props.store_name}
            </DialogTitle>

            <DialogContent>
                <AddItemForm store_id={props.store_id} db={props.db} storage={props.storage} store_name={props.store_name}/>
            </DialogContent>

            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Exit
                </Button>
                
            </DialogActions>
        </Dialog>
    </>
}

export default AddButton