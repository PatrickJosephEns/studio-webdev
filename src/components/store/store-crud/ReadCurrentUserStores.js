import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import firebase from "@firebase/app"

// Material UI
import DisplayStore from './DisplayStore';

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
                        {data.map(data => (
                            <DisplayStore db={this.props.db} storage={this.props.storage} data={data} />
                        ))}
                    </div>);
                }
            }}
        />)
    }

    render() {
        return (<div>
            {this.displayUserStores()}
        </div>)
    }
}

export default ReadUserStores