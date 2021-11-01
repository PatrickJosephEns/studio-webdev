import React from 'react';

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
                                <DisplayStore db={this.props.db} storage={this.props.storage} data={data} />
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