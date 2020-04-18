import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class FeelingPage extends Component {
  //set state
  state = {
    feeling: "",
  };

  //method to set the state for the input changes
  handleInputChange = (event) => {
    this.setState({
      feeling: Number(event.target.value),
    });
  };

  //method to dispatch the new input to redux and send user to next page
  handleNextClick = (event) => {
    if (this.state.feeling) {
      this.props.dispatch({
        type: "SET_FEELING_RATE",
        payload: this.state.feeling,
      });
      this.props.history.push("/understanding");
    } else {
      return alert("Please set a rate!");
    }
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
      </div>
    );
  }
}

export default connect()(FeelingPage);
