import './home.css'
import React, { useState } from 'react'

import DisplayModel from './DisplayModel';
import ReadStores from '../../store/store-crud/ReadStores';

// React-firestore
import { FirestoreDocument } from 'react-firestore';

// Counter
import CountUp from 'react-countup';

// MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ButtonBase } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@material-ui/core/Button';
import Tooltip from '@mui/material/Tooltip';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

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

// Counter Theme
let theme = createTheme();
theme = responsiveFontSizes(theme);

function Home(props) {
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
              <DisplayModel model_no={2}/>
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
                <ThemeProvider theme={theme}>
                  <Typography variant="subtitle" component="div">
                    View Counter
                  </Typography>
                  <br></br>

                  <Typography variant="h2" component="div">
                    {view_counter()}
                  </Typography>
                </ThemeProvider>
              </Paper>
            </Grid>
          </Grid>
        </Grid>


        <Row>
          <ReadStores storage={props.storage} db={props.db} />
        </Row>
      </Container>

      {/* KEYBOARD DIALOG */}
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <div id="bigKeyboard">
            <DisplayModel model_no={1} controls={true} />
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

function view_counter() {
  return (<FirestoreDocument
    path={"users/stats"}
    render={({ isLoading, data }) => {
      if (isLoading) {
        return ("...");
      } else {
        return <CountUp end={data.count} duration={3} />
      }
    }}
  />)
}

export default Home;