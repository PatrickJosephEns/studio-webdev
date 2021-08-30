import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import Button from '@material-ui/core/Button';


class AddItemForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit(e) {
        this.props.db.collection("stores").doc(this.props.store_id).collection("items").add({
            text: this.state.item
        })

        this.setState({
            item: ''
        })

        e.preventDefault();
    }


    render() {
        return <form onSubmit={(this.handleSubmit)}>
            <input type="text" value={this.state.item} placeholder="Item Name" onChange={(this.handleChange)}></input>
            <Button color="primary" size="small" variant="contained" type="submit">Add</Button>
        </form>
    }
}

export default AddItemForm