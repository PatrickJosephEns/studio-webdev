import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import firebase from "@firebase/app"
import './user_store.css'

// Material UI
import Button from '@material-ui/core/Button';

class DisplayUserStore extends React.Component {
    constructor(props) {
        super(props)
    }

    displayStore() {
        return <div class="store">
            <h3>{this.props.data.store_name}</h3>
            <Button onClick={() => { this.props.db.collection("stores").doc(this.props.data.id).delete() }}
                size="small"
                variant="contained"
                color="secondary">
                Delete
            </Button>

            <ul>
                <li class="storeItem">
                    Example Item
                </li>
            </ul>
        </div>
    }

    render() {
        return (<div>
            {this.displayStore()}
        </div>)
    }
}

export default DisplayUserStore