import './App.css';
import React from 'react';
import Routes from './routes';
import Navbar from './components/layouts/navbar';

// Firebase
import firebase from "@firebase/app"
import { FirestoreProvider } from 'react-firestore'
import { FirebaseAuthProvider } from "@react-firebase/auth";
import 'firebase/auth'

// Firebase Configuration and Object
import db, { firebaseConfig } from './firebase-config'

// Setting method for when a new user joins the system
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    db.collection("users").doc(firebase.auth().currentUser.uid).get().then((doc) => {
      if (doc.exists) {

      }
      else {
        db.collection("users").doc(user.uid).set({
          name: user.displayName,
          email: user.email,
          id: user.uid,
          bio: "",
          status: "",
          location: ""
        })
      }
    })
  }
});

const App = () => {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <React.Fragment>
        <FirestoreProvider firebase={firebase}>
          <Navbar />
          {/* Need to pass DB through to routes so that it can be passed to any component */}
          <Routes db={db} />
        </FirestoreProvider>

        {/* <Footer /> */}
      </React.Fragment>
    </FirebaseAuthProvider>
  )
}

export default App;
