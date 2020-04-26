import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import TodoStore from "./mobx/TodoStore";
import Wrapper from "./components/Wrapper";

const initialState = [];
const store = new TodoStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Wrapper store={store}></Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
