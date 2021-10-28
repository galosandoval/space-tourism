import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./components/styles/globalStyles";
import { GlobalVariables } from "./components/styles/variables";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalVariables />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
