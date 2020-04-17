import React, { Component } from "react";

class SubmissionPage extends Component {
  handleSubmit = (event) => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Thank you for the feedback!</h1>
        <div>
          <button onClick={this.handleSubmit} className="app-btn">
            Leave New FeedBack
          </button>
        </div>
      </div>
    );
  }
}

export default SubmissionPage;
