import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Item extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.feedback.feeling}</td>
        <td>{this.props.feedback.understanding}</td>
        <td>{this.props.feedback.support}</td>
        <td>{this.props.feedback.comments}</td>
        <td>
          <Button variant="outlined" color="primary">
            DELETE
          </Button>
        </td>
      </tr>
    );
  }
}

export default Item;
