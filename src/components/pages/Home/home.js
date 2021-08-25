import './home.css'
import React from 'react'

import Display_model from './display_model';
import CreateStore from '../../store/create';
import { ReactThreeFiber } from '@react-three/fiber';
import ReadStores from '../../store/read';
import ReadUserStores from '../../store/user/user_read';

import { FirebaseAuthConsumer, IfFirebaseAuthed } from "@react-firebase/auth";

// Just wrap anything in this <Row>CONTENT HERE</Row>, and it will automatically create a styled div
const Row = ({ children }) => <div className="row justify-content-center panel">{children}</div>
const Note = ({ children }) => <div className="note"><p>{children}</p></div>

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

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
        <h2>This is a temporary means of showing the components</h2>
      </Row>
      <Row>
        <CreateStore db={this.props.db} />
        <Note>Component for User profile page</Note>
      </Row>
      <Row>
        <ReadStores />
        <Note>Component for /stores</Note>
      </Row>
      <Row>
        <ReadUserStores db={this.props.db} />
        <Note>Component for User profile page, so they can manage any of their own stores (Big component)</Note>
      </Row>
    </IfFirebaseAuthed>
  }

  render() {
    return (
      <>
        <div id="home">
          <Display_model />
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