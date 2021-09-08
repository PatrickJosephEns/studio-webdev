import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import firebase from "@firebase/app"
// import './user_store.css'

// Material UI
import DisplayUserStore from './DisplayUserStore';


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
                                {data.map(data => (
                                    <DisplayUserStore db={this.props.db} data={data}/>
                                ))}
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