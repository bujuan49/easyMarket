import React, { Component } from "react";
import "./look.scss";
class look extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }

  get img_url() {
    return (this.props.phone.length && this.props.phone[0].img_url) || "";
  }

  render() {
    let { price, goods_number, phone, callback } = this.props;
    return (
      <>
        <div className="mark" onClick={() => callback(this.props.flag)} />
        <div className="markbox">
          <div className="title">
            <div className="dls">
              <dl>
                <dt>
                  <img src={this.img_url} alt="" />
                </dt>
                <dd>
                  <div>
                    <p>单价:</p>
                    <span>￥{price && price}</span>
                  </div>
                  <div>
                    <p>库存:</p>
                    <span>{goods_number}件</span>
                  </div>
                  <div>已选择:</div>
                </dd>
              </dl>
              <div>
                <span onClick={() => callback(this.props.flag)}>X</span>
              </div>
            </div>
            <div className="count">
              <span>数量</span>
              <div>
                <span onClick={() => this.prev(this.state.num)}>-</span>
                <span>{this.state.num}</span>
                <span onClick={() => this.next(this.state.num)}>+</span>
              </div>
            </div>
          </div>
          <div className="nav">
            <span>加入购物车</span>
            <span>立即下单</span>
          </div>
        </div>
      </>
    );
  }
  prev = num => {
    if (num > 0) {
      this.setState({
        num: --num
      });
    }
  };
  next = num => {
    this.setState({
      num: ++num
    });
  };
}

export default look;
