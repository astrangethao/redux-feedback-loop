import React, { Component } from "react";
import { connect } from "react-redux";

class FeelingPage extends Component {
  state = {
    feeling: "",
  };

  handleInputChange = (event) => {
    this.setState(
      {
        feeling: Number(event.target.value),
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleNextClick = (event) => {
    this.props.dispatch({
      type: "SET_FEELING_RATE",
      payload: this.state.feeling,
    });
    this.props.history.push("/understanding");
  };

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <br />

        <div>
          <h4>Feeling?</h4>
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

export default connect()(FeelingPage);
