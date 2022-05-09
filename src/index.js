import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import MainRoute from "./router/";

import "./style/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <MainRoute />
  </BrowserRouter>,
  document.getElementById("root")
);
