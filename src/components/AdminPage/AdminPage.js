import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Item from "./Item/Item";

class AdminPage extends Component {
  componentDidMount() {
    console.log("mounted");
    this.getFeedback();
    console.log(this.getFeedback());
  }

  getFeedback = () => {
    axios
      .get("/feedback")
      .then((response) => {
        console.log(response.data);
        this.props.dispatch({ type: "SET_FEEDBACK", payload: response.data });
      })
      .catch((err) => console.warn("Error in GET", err));
  };

  render() {
    console.log(this.props.store.feedbackReducer);

    const feedbackArray = this.props.store.feedbackReducer.map(
      (feedback, i) => {
        return <Item key={i} feedback={feedback} />;
      }
    );
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{feedbackArray}</tbody>
        </table>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(AdminPage);
