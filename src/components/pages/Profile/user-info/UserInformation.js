import React from 'react';
import { FirestoreDocument } from 'react-firestore';
import firebase from "@firebase/app";
import "./UserInformation.css";
import UserBioForm from './EditBioForm';
import EditBioButton from './EditBioButton';
import EditStatusButton from './EditStatusButton';
import UploadFileButton from './UploadFileButton';

class UserInformation extends React.Component {

    displayStores() {
        return (<FirestoreDocument
            path={"users/" + firebase.auth().currentUser.uid}
            render={({ isLoading, data }) => {
                if (isLoading) {
                    return (<div>
                        <h2>Loading Profile...</h2>
                    </div>);
                } else {
                    return (<div class="profileItems">         
                        <h1>Bio:</h1>
                        <p>{data.bio}</p>
                        <EditBioButton id={firebase.auth().currentUser.uid} db={this.props.db}/>
                        <br/>
                        <h1>Status:</h1>
                        <p>{data.status}</p>
                        <EditStatusButton id={firebase.auth().currentUser.uid} db={this.props.db}/>

                        <UploadFileButton storage={this.props.storage}/>
                    </div>);
                }
            }}
        />)
    }

    render() {
        return (<div>
            {this.displayStores()}
        </div>)
    }
}

export default UserInformation