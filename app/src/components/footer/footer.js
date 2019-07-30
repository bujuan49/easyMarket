import React, { Component } from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer>
        <dl>
          <dt>
            <span className="icon iconfont icon-fangshai" />
          </dt>
          <dd>
            <NavLink to="/home/index">首页</NavLink>
          </dd>
        </dl>
        <dl>
          <dt>
            <span className="icon iconfont icon-jingzi" />
          </dt>
          <dd>
            <NavLink to="/home/specical">专题</NavLink>
          </dd>
        </dl>
        <dl>
          <dt>
            <span className="icon iconfont icon-mianmo" />
          </dt>
          <dd>
            <NavLink to="/home/classify">分类</NavLink>
          </dd>
        </dl>
        <dl>
          <dt>
            <span className="icon iconfont icon-xiangshui" />
          </dt>
          <dd>
            <NavLink to="/home/shop">购物车</NavLink>
          </dd>
        </dl>
        <dl>
          <dt>
            <span className="icon iconfont icon-kouhong" />
          </dt>
          <dd>
            <NavLink to="/home/my">我的</NavLink>
          </dd>
        </dl>
      </footer>
    );
  }
}

export default footer;
