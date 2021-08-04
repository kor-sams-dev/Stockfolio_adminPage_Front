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
<<<<<<< HEAD

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
=======
>>>>>>> d4bde4ed76cbcbd4bd5cc81e86791fe2d64265bd
