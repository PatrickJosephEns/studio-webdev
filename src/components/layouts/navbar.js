import firebase from "@firebase/app"

import { FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import Avatar from "@material-ui/core/Avatar";
import AccountCircle from '@material-ui/icons/AccountCircle';
import LoginButton from "./login-popout";


function NavBar() {

  const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();
  return (
    <AppBar position="static" style={{ background: 'rgba(0,0,0,0.4)', flexGrow: 1 }} >
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
          <HomeIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title} ahref="/">
          The Mall
        </Typography>

       <LoginButton />

        <IconButton href="/profile">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;