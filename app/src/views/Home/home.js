import React, { Component } from 'react';
import { MapRoute } from "../../routes";
import "../../scss/global.scss";
class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <MapRoute route={this.props.route}></MapRoute>
            </div>
        );
    }
}

export default Home;