import React from 'react';
import firebase from "@firebase/app"

import './login.css'

class Login extends React.Component {
    render() {
        return <section>
            <div id="login-panel">
                <h3>Login</h3>
                {this.googleSignIn()} <br></br>
                {this.facebookSignIn()} <br></br>
                {/* {this.twitterSignIn()} <br></br> */}
                {this.githubSignIn()} <br></br>
            </div>

            <img src='/images/login_background.jpg' alt="Blurred photo of a mall" id="login-background" />
        </section>
    }

    googleSignIn() {
        return (<button class="btn btn-outline-light" onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
        }}>Sign In with Google</button>);
    }

    facebookSignIn() {
        return (<button class="btn btn-outline-light" onClick={() => {
            const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(facebookAuthProvider);
        }}>Sign In with Facebook</button>);
    }

    twitterSignIn() {
        return (<button class="btn btn-outline-light" onClick={() => {
            const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
            firebase.auth().signInWithPopup(twitterAuthProvider);
        }}>Sign In with Twitter</button>);
    }

    githubSignIn() {
        return (<button class="btn btn-outline-light" onClick={() => {
            const githubAuthProvider = new firebase.auth.GithubAuthProvider();
            firebase.auth().signInWithPopup(githubAuthProvider);
        }}>Sign In with Github</button>);
    }
}

export default Login