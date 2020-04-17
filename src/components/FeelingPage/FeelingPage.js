import React, { Component } from "react";

class FeelingPage extends Component {
  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <br />

        <div>
          <h4>Feeling?</h4>
          <input
            className="app-input"
            type="number"
            min="1"
            max="5"
            placeholder="1-5"
          ></input>
        </div>

        <div>
          <button className="app-btn">NEXT</button>
        </div>
      </div>
    );
  }
}

export default FeelingPage;
