import React from "react";

import firebase from "@firebase/app";

import Button from "@material-ui/core/Button";

// Data Inputs
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

// Layout
import Grid from "@material-ui/core/Grid";

var folderRef = [];

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
    folderRef = [];

    for (var i = 0; i < e.target.files.length; i++) {
      var imageFile = e.target.files[i];

      this.uploadImageAsPromise(imageFile, this.props.store_name);
    }
  }

  uploadImageAsPromise(imageFile, store_name) {
    return new Promise(function (resolve, reject) {
      var storageRef = firebase.storage().ref(store_name + "/" + imageFile.name);

      var extension = imageFile.name.split(".").pop();
      switch (extension) {
        case 'bin':
        case 'jpg':
        case 'png':
        case 'gltf':
        case 'stl':
        case 'jpeg':
          // Reference to all files
          folderRef.push(storageRef.fullPath)
          //Upload file
          storageRef.put(imageFile);
          break;

        default:
          break;
      }
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    if (folderRef) {
      console.log(folderRef)
    }

    this.props.db
      .collection("stores")
      .doc(this.props.store_id)
      .collection("items")
      .add({
        text: this.state.item,
        desc: this.state.desc,
        image: folderRef ? folderRef[0] : null,
        image2: folderRef[1] ? folderRef[1] : null,
        image3: folderRef[2] ? folderRef[2] : null,
        image4: folderRef[3] ? folderRef[3] : null,
        image5: folderRef[4] ? folderRef[4] : null,
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
          <input type="file" multiple="multiple" onChange={this.onChange} />
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
