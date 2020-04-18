import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class CommentPage extends Component {
  state = {
    comment: "",
  };

  handleInputChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleNextClick = (event) => {
    this.props.dispatch({
      type: "SET_COMMENT",
      payload: this.state.comment,
    });
    this.props.history.push("/review");
  };

  handleBackClick = (event) => {
    this.props.history.push("/support");
  };

  render() {
    return (
      <div>
        <h2>Any comment you want to leave?</h2>
        <br />

        <div>
          <h4>Comments</h4>
          <input
            onChange={this.handleInputChange}
            className="app-input"
            type="text"
            placeholder="comment"
          ></input>
        </div>

        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleNextClick}
          >
            NEXT
          </Button>
        </div>

        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleBackClick}
          >
            BACK
          </Button>
        </div>
      </div>
    );
  }
}

export default connect()(CommentPage);
