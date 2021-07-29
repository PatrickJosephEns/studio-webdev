import './App.css';
import React, { Component } from 'react';
import Routes from './routes';

// Firebase
import firebase from "@firebase/app"
import { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";
import 'firebase/auth'

// Firebase Configuration and Object
import db, { firebaseConfig } from './firebase-config'

// Setting method for when a new user joins the system
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    db.collection("users").doc(user.uid).set({
      name: user.displayName,
      email: user.email,
      id: user.uid,
    })
  }
});

const App = () => {
  return (
    <React.Fragment>
      {/* Need to pass DB through to routes so that it can be passed to any component */}
      <Routes db={db} />
    </React.Fragment>
  )
}

export default App;
