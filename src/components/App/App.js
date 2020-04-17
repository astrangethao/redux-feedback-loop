import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import FeelingPage from "../FeelingPage/FeelingPage";
import UnderstandingPage from "../UnderstandingPage/UnderstandingPage";
import SupportPage from "../SupportPage/SupportPage";
import CommentPage from "../CommentPage/CommentPage";
import ReviewPage from "../ReviewPage/ReviewPage";
import SubmissionPage from "../SubmissionPage/SubmissionPage";
import AdminPage from "../AdminPage/AdminPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />

          <Route exact path="/" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comment" component={CommentPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/submission" component={SubmissionPage} />
          <Route exact path="/admin" component={AdminPage} />
        </Router>
      </div>
    );
  }
}

export default App;
