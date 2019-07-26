import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { MapRoute, route } from "./routes";
import './font/iconfont.css'

var FastClick = require("fastclick");
FastClick.attach(document.body);
ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <MapRoute route={route} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
