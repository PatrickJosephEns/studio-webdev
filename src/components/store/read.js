import React from 'react';
import { FirestoreCollection } from 'react-firestore';

class ReadStores extends React.Component {

    displayStores() {
        return (<FirestoreCollection
            path="stores"
            sort={"store_name:asc"}
            render={({ isLoading, data }) => {
                if (isLoading) {
                    return (<div class="card list mx-auto">
                        <h2>Loading Store...</h2>
                    </div>);
                } else {
                    return (<div class="card list mx-auto">
                        <h1>All the stores</h1>
                        <div class="card-body">
                            <ul>
                                {data.map(store => (
                                    <h2>
                                        {store.store_name}
                                    </h2>
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