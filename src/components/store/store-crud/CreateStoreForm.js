import React from 'react';
import firebase from "@firebase/app"
import Button from '@material-ui/core/Button';

class CreateStore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            store_name: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            store_name: e.target.value
        })
    }

    handleSubmit(e) {
        console.log(this.state.store_name)

        this.props.db.collection("stores").add({
            owner_id: firebase.auth().currentUser.uid,
            store_name: this.state.store_name,
        })

        e.preventDefault();
    }

    render() {
        return <form onSubmit={(this.handleSubmit)} class="new-store">
            <h3>Make a new store!</h3>
            <input id="todo_input" type="text" value={this.state.store_name} onChange={(this.handleChange)}></input>
            <Button type="submit" color="primary" size="small" variant="contained">Create Store</Button>
        </form>
    }
}

export default CreateStore