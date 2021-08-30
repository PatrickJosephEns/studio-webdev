import React from 'react';
import { FirestoreCollection } from 'react-firestore';

import firebase from "@firebase/app"
import './user_store.css'

import Button from '@material-ui/core/Button';

class StoreForm extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        this.props.db.collection("stores").doc(this.props.id).update({
            store_name: this.state.text
        }) 

        this.setState({
            text: ''
        })

        e.preventDefault();
    }

    render() {
        return <form onSubmit={(this.handleSubmit)} class="todo-form">
            <input id="todo_input" placeholder="Store name" type="text" value={this.state.text} onChange={(this.handleChange)}></input>
            <Button type="submit" color="primary" variant="contained">Change Name</Button>
        </form>
    }
}

export default StoreForm