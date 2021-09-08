import './home.css'
import React from 'react'

import DisplayModel from './DisplayModel';
import ReadStores from '../../store/store-crud/ReadStores';
import { FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";

// Just wrap anything in this <Row>CONTENT HERE</Row>, and it will automatically create a styled div
const Row = ({ children }) => <div className="row justify-content-center panel">{children}</div>
const Note = ({ children }) => <div className="note"><p>{children}</p></div>

class Home extends React.Component {
  login_message() {
    return <FirebaseAuthConsumer>
      {({ isSignedIn }) => {
        if (!isSignedIn) {
          return <h1>Sign in to view store functions</h1>
        }
        return this.temporary_content()
      }}
    </FirebaseAuthConsumer>
  }

  temporary_content() {
    return <IfFirebaseAuthed>
      <Row>
        <ReadStores />
        <Note>Component for /stores</Note>
      </Row>
    </IfFirebaseAuthed>
  }

  render() {
    return (
      <>
        <div id="home">
          <DisplayModel />
          <div class="title">
            <p class="header">The Mall</p>
            <p class="paragraph">Experience the future of shopping</p>
          </div>
        </div>

        {this.login_message()}
      </>
    );
  }
}

export default Home;