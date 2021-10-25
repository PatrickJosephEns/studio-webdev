import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import DisplayStore from './DisplayStore';

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
                    return (<>
                        {data.map(data => (
                            <div style={{marginTop: '15px'}}>
                                <DisplayStore db={this.props.db} data={data} />
                            </div>
                        ))}
                    </>);
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

export default ReadStores