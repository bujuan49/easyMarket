import React, { Component } from "react";
import "./look.scss";
import { inject, observer } from "mobx-react";
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
@inject("shop")
@observer

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
    let { price, goods_number, callback } = this.props;
    return (
      <div className="Marks">
        <div className="mark" onClick={() => callback(this.props.flag)} />
        <div className="markbox">
          <div className="title">
            <div className="dlss">
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
                <span onClick={() => this.props.addNum("-")}>-</span>
                <span>{this.props.num}</span>
                <span onClick={() => this.props.addNum("+")}>+</span>
              </div>
            </div>
          </div>
          <div className="countNav">
            <span onClick={()=>this.AddShop()}>加入购物车</span>
            <span>立即下单</span>
          </div>
        </div>
      </div>
    );
  }
  AddShop=()=>{
    if(this.props.num===0){
      Toast.fail("请选择商品数量");
    }

   let str={goodsId:this.props.id,number:this.props.num,productId:this.props.productId[0].id}
    this.props.shop.addNum(str);
    Toast.success("添加成功！");
  }
 
}

export default look;
