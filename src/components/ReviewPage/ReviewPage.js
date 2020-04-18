import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Button from "@material-ui/core/Button";

class ReviewPage extends Component {
  getFeedback = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log(response.data);
        this.props.dispatch({ type: "SET_FEEDBACK", payload: response.data });
      })
      .catch((err) => console.warn("Error in GET", err));
  };

  handleSubmit = (event) => {
    const feedback = {
      feeling: this.props.store.feelingReducer,
      understanding: this.props.store.understandingReducer,
      support: this.props.store.supportReducer,
      comments: this.props.store.commentReducer,
    };

    axios
      .post("/feedback", feedback)
      .then((response) => {
        console.log(response.data);
        this.getFeedback();
        this.props.history.push("/submission");
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  handleBackClick = (event) => {
    this.props.history.push("/comment");
  };

  render() {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <div>
          <h4>Feelings: {this.props.store.feelingReducer}</h4>
          <h4>Understanding: {this.props.store.understandingReducer}</h4>
          <h4>Support: {this.props.store.supportReducer}</h4>
          <h4>Comments: {this.props.store.commentReducer}</h4>
        </div>

        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleSubmit}
          >
            SUBMIT
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

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(ReviewPage);
