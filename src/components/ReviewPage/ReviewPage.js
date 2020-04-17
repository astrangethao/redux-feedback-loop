import React, { Component } from "react";
import { connect } from "react-redux";

class ReviewPage extends Component {
  handleSubmit = (event) => {
    this.props.history.push("/submission");
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
          <button onClick={this.handleSubmit} className="app-btn">
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(ReviewPage);
