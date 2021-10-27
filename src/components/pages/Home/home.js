import './home.css'
import React, { useState } from 'react'

import DisplayModel from './DisplayModel';
import ReadStores from '../../store/store-crud/ReadStores';
import { FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";

// MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Showcase from './models/Showcase';
import { ButtonBase } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@material-ui/core/Button';
import Tooltip from '@mui/material/Tooltip';

// Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// Just wrap anything in this <Row>CONTENT HERE</Row>, and it will automatically create a styled div
const Row = ({ children }) => <div className="row justify-content-center panel">{children}</div>

const paperHeight = 220;
const paperWidth = 250;
const paperPadding = '15px'
const middleDif = 50;

function Home() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Container>
        <div id="home">
          <Tooltip title="Click the phone!" placement="left">
            <div id="homeModel">
              <DisplayModel />
            </div>
          </Tooltip>
          <div class="title">
            <p class="header">The Mall</p>
            <p class="paragraph">Experience the future of shopping</p>
          </div>
        </div>
        <Grid item>
          <Grid container justifyContent="center" spacing={10}>
            <Grid item>
              <Paper elevation={5} sx={{ height: paperHeight, width: paperWidth, padding: paperPadding }}>
                <Typography variant="subtitle1" component="div">
                  At The Mall, you can browse a variety of user created stores and view the items with images or 3d models (where supported)
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Tooltip title="Popout" placement="bottom">
                <ButtonBase onClick={event => { setOpen(!open) }}>
                  <Paper elevation={15} sx={{ height: paperHeight + middleDif, width: paperWidth + middleDif }}>
                    <DisplayModel model_no={1} />
                  </Paper>
                </ButtonBase>
              </Tooltip>
            </Grid>

            <Grid item>
              <Paper elevation={5} sx={{ height: paperHeight, width: paperWidth, padding: paperPadding }}>
                <Typography variant="subtitle1" component="div">
                  To make a store at The Mall, click on your <a href="/profile">Profile</a> and than scroll down to add a store. You can now add items to your new store
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>


        <Row>
          <ReadStores />
        </Row>
      </Container>

      {/* HIDDEN DIALOG */}
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <div id="bigKeyboard">
            <DisplayModel model_no={1} />
          </div>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Home;