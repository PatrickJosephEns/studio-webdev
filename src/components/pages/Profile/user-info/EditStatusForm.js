import React from 'react';

import Button from '@material-ui/core/Button';

class UserStatusForm extends React.Component {
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
        this.props.db.collection("users").doc(this.props.id).update({
            status: this.state.text
        }) 

        this.setState({
            text: ''
        })

        e.preventDefault();
    }

    render() {
        return <form onSubmit={(this.handleSubmit)} class="todo-form">
            <input placeholder="Status" type="text" value={this.state.text} onChange={(this.handleChange)}></input>
            <Button type="submit" color="primary" variant="contained">Change Status</Button>
        </form>
    }
}

export default UserStatusForm;