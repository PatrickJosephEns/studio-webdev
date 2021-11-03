import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Popout
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { ref, getDownloadURL } from "firebase/storage";
import "./Card.css"
import DeleteButton from './DeleteItemButton';

function CardItem(props) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(null);
  };

  return <><Card sx={{ maxWidth: 345, margin: 1 }}>
    <CardActionArea onClick={event => { setOpen(!open) }}>
      <img src="/images/default-image.jpg" alt="Image" id={props.data.id} className="cardImg" />
      {getImage(props, props.data.id)}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.text}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {props.data.desc}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        {props.data.text}
      </DialogTitle>

      <DialogContent>
        <img src="/images/default-image.jpg" alt="Image" id={props.data.id + "-popout"} className="cardImg-Big" />
        {getImage(props, props.data.id + "-popout")}
        {props.data.desc}
      </DialogContent>

      <DialogActions>
        <DeleteButton data={props.data} store_id={props.store_id} db={props.db} />
        <Button autoFocus onClick={handleClose} color="primary">
          Exit
        </Button>
      </DialogActions>
    </Dialog>
  </>
}

function getImage(props, imgId) {
  if (props.data.image) {
    const storageRef = props.storage.ref();
    const fileRef = storageRef.child(props.data.image)

    fileRef.getDownloadURL().then((url) => {
      // console.log(url) // Debug
      const img = document.getElementById(imgId)
      if (img) {
        img.setAttribute('src', url);
      }
    })
  }
}



export default CardItem;