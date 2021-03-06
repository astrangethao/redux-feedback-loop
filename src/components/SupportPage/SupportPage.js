import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class SupportPage extends Component {
  //set state
  state = {
    support: "",
  };

  //method to set the state for the input changes
  handleInputChange = (event) => {
    this.setState({
      support: Number(event.target.value),
    });
  };

  //method to dispatch the new input to redux and send user to next page
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

  //method to handle click event; sends user back to the previous page
  handleBackClick = (event) => {
    this.props.history.push("/understanding");
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

export default connect()(SupportPage);
