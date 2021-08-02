import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import stores from "./stores";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
