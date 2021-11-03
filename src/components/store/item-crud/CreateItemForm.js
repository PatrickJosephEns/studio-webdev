import React from "react";

import Button from "@material-ui/core/Button";

// Data Inputs
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

// Layout
import Grid from "@material-ui/core/Grid";

var file = null;
var storageRef = null;
var fileRef = null;


class AddItemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
      desc: "",
      category: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    file = e.target.files[0];
    storageRef = this.props.storage.ref()
    // Add the store name to the files path so it is kept with its store
    fileRef = storageRef.child(this.props.store_name + '/' + file.name)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    if (fileRef) {
      fileRef.put(file).then(() => {
        console.log("Uploaded a file")
      })
    }

    console.log(fileRef)
    
    this.props.db
      .collection("stores")
      .doc(this.props.store_id)
      .collection("items")
      .add({
        text: this.state.item,
        desc: this.state.desc,
        image: fileRef ? fileRef.fullPath : null,
      });

    this.setState({
      item: "",
      desc: "",
      category: "",
    });

    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container direction="column" justifyContent="space-between" alignItems="flex-start" spacing={1}>
          <InputLabel>Image/3D Model</InputLabel>
          <input type="file" onChange={this.onChange} />
          <br></br>

          <TextField name="item" label="Item Name" onChange={this.handleChange} />
          <TextField name="desc" label="Item Description" onChange={this.handleChange} />

          <Button color="primary" size="small" variant="contained" type="submit">
            Add
          </Button>
        </Grid>
      </form>
    );
  }
}

export default AddItemForm;
