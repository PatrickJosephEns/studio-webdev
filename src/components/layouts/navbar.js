import firebase from "@firebase/app"

import { FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";
import Button from '@material-ui/core/Button';

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="http://localhost:3000/">The Mall</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Another Link <span class="sr-only"></span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Other Links
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Data</a>
              <a class="dropdown-item" href="#">About</a>
            </div>

          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <FirebaseAuthConsumer>

            {({ isSignedIn }) => {
              if (!isSignedIn) {
                return <Button href="/login" variant="contained" color="primary">Login</Button>
              }
              return <Button onClick={() => {firebase.auth().signOut()}} variant="contained" color="secondary">Log Out</Button>
            }}
          </FirebaseAuthConsumer>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;