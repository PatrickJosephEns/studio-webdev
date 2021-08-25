import React from 'react';
import { FirestoreCollection } from 'react-firestore';

class ReadStores extends React.Component {

    displayStores() {
        return (<FirestoreCollection
            path="stores"
            sort={"store_name:asc"}
            render={({ isLoading, data }) => {
                if (isLoading) {
                    return (<div>
                        <h2>Loading Store...</h2>
                    </div>);
                } else {
                    return (<div>
                        <h1>All the stores</h1>
                        <div>
                            <ul>
                                {data.map(store => (
                                    <h5>
                                        {store.store_name}
                                    </h5>
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
            { this.displayStores()}
        </div>)
    }
}

export default ReadStores