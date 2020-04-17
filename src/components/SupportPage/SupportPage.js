import React, { Component } from "react";
import { connect } from "react-redux";

class SupportPage extends Component {
  state = {
    support: "",
  };

  handleInputChange = (event) => {
    this.setState(
      {
        support: Number(event.target.value),
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleNextClick = (event) => {
    if (this.state.support) {
      this.props.dispatch({
        type: "SET_SUPPORT_RATE",
        payload: this.state.support,
      });
      this.props.history.push("/comment");
    } else {
      alert("Please set a rate!");
    }
  };

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <br />

        <div>
          <h4>Support?</h4>
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
      </div>
    );
  }
}

export default connect()(SupportPage);
