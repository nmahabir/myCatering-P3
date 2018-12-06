import React from "react";
import logo from "../../logo.png";

const Jumbotron = ({ children }) => (
  <div
    style={{ width: "100%" }}
    className="jumbotron jumbotron-fluid"
  >
    <img src={logo} className="App-logo" alt="logo" />
    <div style={{textAlign: "center"}}>{children}</div>
  </div>
);

export default Jumbotron;

 