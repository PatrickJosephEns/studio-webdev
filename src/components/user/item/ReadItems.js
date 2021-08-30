import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import firebase from "@firebase/app"

// Material UI
import Button from '@material-ui/core/Button';


class ReadStoreItems extends React.Component {
    displayUserStores() {
        return (<FirestoreCollection
            path={"stores/" + this.props.store_id + "/items"}
            render={({ isLoading, data }) => {
                if (isLoading) {
                    return (<div>
                        <h2>Loading Items...</h2>
                    </div>);
                } else {
                    return (<ul>
                        {data.map(data => (
                            <li>{ data.text }</li>
                        ))}
                    </ul>);
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

export default ReadStoreItems