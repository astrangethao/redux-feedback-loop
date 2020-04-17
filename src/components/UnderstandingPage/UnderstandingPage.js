import React, { Component } from "react";
import { connect } from "react-redux";

class UnderstandingPage extends Component {
  state = {
    understanding: "",
  };

  handleInputChange = (event) => {
    this.setState({
      understanding: Number(event.target.value),
    });
  };

  handleNextClick = (event) => {
    if (this.state.understanding) {
      this.props.dispatch({
        type: "SET_UNDERSTANDING_RATE",
        payload: this.state.understanding,
      });
      this.props.history.push("/support");
    } else {
      alert("Please set a rate!");
    }
  };

  handleBackClick = (event) => {
    this.props.history.push("/");
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
            require="required"
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

export default connect()(UnderstandingPage);
