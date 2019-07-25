import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import {MapRoute,route} from "../../routes";
class Index extends Component {
      render() {
        return (
            <BrowserRouter>
            <MapRoute route={route}></MapRoute>
            </BrowserRouter>
        );
    }
}

export default Index;