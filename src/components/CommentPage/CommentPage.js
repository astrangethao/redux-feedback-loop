import React, { Component } from "react";
import { connect } from "react-redux";

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
          <button onClick={this.handleNextClick} className="app-btn">
            NEXT
          </button>
        </div>

        <div>
          <button onClick={this.handleBackClick} className="app-btn">
            BACK
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(CommentPage);
