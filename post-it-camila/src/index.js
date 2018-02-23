import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main";
import { createStore } from "redux";
import "../dist/css/style.css";
import reducer from "../src/Redux/Reducers/NotesReducer";
import { Provider } from "react-redux";

// Virtual DOM
// 1º Page
// 2º Element DOM que vai insirir
let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
