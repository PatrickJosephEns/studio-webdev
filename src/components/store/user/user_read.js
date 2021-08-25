import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import firebase from "@firebase/app"
import './user_store.css'

// Material UI
import Button from '@material-ui/core/Button';
import DisplayUserStore from './user_store';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ReadUserStores extends React.Component {
    displayUserStores() {
        return (<FirestoreCollection
            path="stores"
            filter={['owner_id', '==', firebase.auth().currentUser.uid]}
            render={({ isLoading, data }) => {
                if (isLoading) {
                    return (<div>
                        <h2>Loading Store...</h2>
                    </div>);
                } else {
                    return (<div>
                        <h1>{firebase.auth().currentUser.displayName}'s stores</h1>
                        <div>
                            <ul>
                                {data.map(data => (
                                    <DisplayUserStore db={this.props.db} data={data}/>
                                ))}
                            </ul>
                        </div>
                    </div>);
                }
            }}
        />)
    }

    render() {
        return (<div>
            { this.displayUserStores()}
        </div>)
    }
}

export default ReadUserStores