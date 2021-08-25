import React, { useState } from 'react';
import { FirestoreCollection } from 'react-firestore';

import firebase from "@firebase/app"
import './user_store.css'

// Material UI
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';


function EditButton(props) {
    const [popOpen, setPopOpen] = useState(false)

    const handleClose = () => {
        setPopOpen(null);
    };

    return <><Button onClick={() => { setPopOpen(!popOpen) }} color="primary" size="small" variant="contained">
        Edit
    </Button>

        <Popover
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            open={popOpen}
            onClose={handleClose}>
            <div class="popout">
                <Typography size="large">Editing {props.store_name}</Typography>
            </div>
        </Popover>
    </>
}

export default EditButton