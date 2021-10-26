import './home.css'
import React from 'react'

import DisplayModel from './DisplayModel';
import ReadStores from '../../store/store-crud/ReadStores';
import { FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";

// MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Showcase from './models/Showcase';

// Just wrap anything in this <Row>CONTENT HERE</Row>, and it will automatically create a styled div
const Row = ({ children }) => <div className="row justify-content-center panel">{children}</div>

const paperHeight = 220;
const paperWidth = 250;
const paperPadding = '15px'
const middleDif = 50;

class Home extends React.Component {
  render() {
    return (
      <>
        <div id="home">
          <div id="homeModel">
            <DisplayModel />
          </div>
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
              <Paper elevation={15} sx={{ height: paperHeight + middleDif, width: paperWidth + middleDif }}>
                <DisplayModel model_no={1}/>
              </Paper>
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
      </>
    );
  }
}

export default Home;