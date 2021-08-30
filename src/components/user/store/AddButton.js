import React, { useState } from 'react';
import { FirestoreCollection } from 'react-firestore';

import firebase from "@firebase/app"
import './user_store.css'

// Material UI
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
import AddItemForm from '../item/AddItemForm';

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
                <AddItemForm store_id={props.store_id} db={props.db}/>
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