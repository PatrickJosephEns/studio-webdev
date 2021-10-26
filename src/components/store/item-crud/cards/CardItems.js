import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Popout
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function CardItem(props) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(null);
  };

  return <><Card sx={{ maxWidth: 345, margin: 1 }}>
    <CardActionArea onClick={event => { setOpen(!open) }}>
      <CardMedia
        component="img"
        height="100"
        image="/images/default-image.jpg"
      />
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
        <h1>3d model and images will go here</h1>
        {props.data.desc}
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Exit
        </Button>

      </DialogActions>
    </Dialog>
  </>
}

export default CardItem;