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

  handleChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    this.props.db
      .collection("stores")
      .doc(this.props.store_id)
      .collection("items")
      .add({
        text: this.state.item,
        desc: this.state.desc,
        category: this.state.category,
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
        <TextField name="item" label="Item Name" onChange={this.handleChange} />
        <TextField name="desc" label="Item Description" onChange={this.handleChange} />

        <FormControl>
          <InputLabel>Category</InputLabel>
          <Select
            native
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            input={<Input id="demo-dialog-native" />}
          >
            <option aria-label="None" value="" />
            <option value={"Tech"}>Tech</option>
            <option value={"Clothes"}>Clothes</option>
            <option value={"Food"}>Food</option>
          </Select>
        </FormControl>

        <Button color="primary" size="small" variant="contained" type="submit">
          Add
        </Button>
        </Grid>
      </form>
    );
  }
}

export default AddItemForm;
