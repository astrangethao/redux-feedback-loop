import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feedbackReducer = (state = [], action) => {
  if (action.type === "SET_FEEDBACK") {
    return [...action.payload];
  }
  return state;
};

const feelingReducer = (state = "", action) => {
  if (action.type === "SET_FEELING_RATE") {
    return action.payload;
  }
  return state;
};

const understandingReducer = (state = "", action) => {
  if (action.type === "SET_UNDERSTANDING_RATE") {
    return action.payload;
  }
  return state;
};

const supportReducer = (state = "", action) => {
  if (action.type === "SET_SUPPORT_RATE") {
    return action.payload;
  }
  return state;
};

const commentReducer = (state = "", action) => {
  if (action.type === "SET_COMMENT") {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
