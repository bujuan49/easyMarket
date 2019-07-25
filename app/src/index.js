import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./views/Home/home.js";
import {Provider}from "mobx-react";
import store from "./store";
var FastClick = require('fastclick');
FastClick.attach(document.body);
ReactDOM.render(<Provider {...store}><Home /></Provider>, document.getElementById('root'));
