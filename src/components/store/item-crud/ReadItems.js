import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import CardItem from './cards/CardItems'
import './cards/Cards.css';

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
                    return (<div className='row'>
                        {data.map(data => (
                            <CardItem text={data.text}/>
                      ))}
                       </div> 
                    );
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