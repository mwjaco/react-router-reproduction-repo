import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";

import getRoutes from "./App";

const routes = getRoutes();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router history={browserHistory} routes={routes} />
  </StrictMode>,
  rootElement
);
