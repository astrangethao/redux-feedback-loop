import React, { Component } from "react";
import { connect } from "react-redux";

class UnderstandingPage extends Component {
  state = {
    understanding: "",
  };

  handleInputChange = (event) => {
    this.setState(
      {
        understanding: Number(event.target.value),
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleNextClick = (event) => {
    this.props.dispatch({
      type: "SET_UNDERSTANDING_RATE",
      payload: this.state.understanding,
    });
    this.props.history.push("/support");
  };

  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <br />

        <div>
          <h4>Understanding?</h4>
          <input
            onChange={this.handleInputChange}
            className="app-input"
            type="number"
            min="1"
            max="5"
            placeholder="1-5"
          ></input>
        </div>

        <div>
          <button onClick={this.handleNextClick} className="app-btn">
            NEXT
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(UnderstandingPage);
