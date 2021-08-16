import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import ShareListButton from './ShareListButton';

class OwnedList extends React.Component {

    displayStores() {
        return (<FirestoreCollection
            path={"store/"}
            sort={"text:asc"}
            render={({ isLoading, data }) => {
                if (isLoading) {
                    return (<div class="card list mx-auto">
                        <h2>Loading Store...</h2>
                    </div>);
                } else {
                    return (<div class="card list mx-auto">

                        <div class="card-body">
                            <ul>
                                {data.map(data => (
                                    <li>
                                        {data.store_name}
                                    </li>
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

export default OwnedList