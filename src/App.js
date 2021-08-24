import './App.css';
import React, { Component } from 'react';
import Routes from './routes';
import Navbar from './components/layouts/navbar';

// Firebase
import firebase from "@firebase/app"
import { FirestoreProvider } from 'react-firestore'
import { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";
import 'firebase/auth'

// Firebase Configuration and Object
import db, { firebaseConfig } from './firebase-config'
import Footer from './components/layouts/footer';

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
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <React.Fragment>
        <Navbar />
        {/* Need to pass DB through to routes so that it can be passed to any component */}
        {/* <IfFirebaseAuthed> */}
          <FirestoreProvider firebase={firebase}>
            <Routes db={db} />
          </FirestoreProvider>
        {/* </IfFirebaseAuthed> */}

        <Footer />
      </React.Fragment>
    </FirebaseAuthProvider>
  )
}

export default App;
