import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {MapRoute} from "../../routes";
import "../../scss/global.scss";
class Home extends Component {
      render() {
        return (
         <div className="wrap">
         <MapRoute route={this.props.route}></MapRoute>
         <footer>
         <NavLink to="/home/index">首页</NavLink>
         <NavLink to="/home/specical">专题</NavLink>
         <NavLink to="/home/classify">分类</NavLink>
         <NavLink to="/home/shop">购物车</NavLink>
         <NavLink to="/home/my">我的</NavLink>
         </footer>
         </div>
        );
    }
}

export default Home;