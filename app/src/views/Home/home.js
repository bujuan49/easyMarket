import React, { Component } from 'react';
import { MapRoute } from "../../routes";
import "../../scss/global.scss";
import { getCookie } from '../../utils/index'
import {Redirect} from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div className="wrap">
                {
                    getCookie('x-nideshop-token') ? (<MapRoute route={this.props.route}></MapRoute>) : (
                        <Redirect to='/login'></Redirect>
                    )
                }
            </div>
        );
    }
}

export default Home;