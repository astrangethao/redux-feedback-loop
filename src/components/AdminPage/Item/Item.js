import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Item extends Component {
  //delete function to handle button click event
  handleDelete = (event) => {
    const itemId = event.target.dataset.id;
    console.log("DELETE CLICKED", itemId);
  };

  render() {
    return (
      //feedback item is in a table row with td to display each column of data
      <tr>
        <td>{this.props.feedback.feeling}</td>
        <td>{this.props.feedback.understanding}</td>
        <td>{this.props.feedback.support}</td>
        <td>{this.props.feedback.comments}</td>
        <td>
          <Button
            onClick={this.handleDelete}
            variant="outlined"
            color="primary"
            data-id={this.props.feedback.id}
          >
            DELETE
          </Button>
        </td>
      </tr>
    );
  }
}

export default Item;
