import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class SubmissionPage extends Component {
  handleSubmit = (event) => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Thank you for the feedback!</h1>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleSubmit}
          >
            Leave New FeedBack
          </Button>
        </div>
      </div>
    );
  }
}

export default SubmissionPage;
