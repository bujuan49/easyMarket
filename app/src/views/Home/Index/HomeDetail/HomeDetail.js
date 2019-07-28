import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "../../../../scss/HomeDetail.scss";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
@inject("homeDetail")
@observer
class HomeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { phone,info,common,list} = this.props.homeDetail;
    let { name, price } = this.props.location.state;
    return (
      <>
        <header>
          <span>&lt;</span>
          <span>{name}</span>
          <span />
        </header>
        <section className="section">
          <div className="goodsBannerItem">
            <div className="swiper-container phone">
              <div className="swiper-wrapper">
                {phone.map(item => (
                  <div className="swiper-slide" key={item.id}>
                    <img src={item.img_url} />
                  </div>
                ))}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
          <ul className="serviceList">
          <li>
              <span>★</span>
              30天无忧退货
          </li>
          <li>
              <span>★</span>
              48小时快速退款
          </li>
          <li>
              <span>★</span>
              满88元免邮费
          </li>
          </ul>
        <div className="goodsMsgWrap">
      {
        info.map(item=>(
            <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.goods_brief}</span>
            <span>￥{item.retail_price}</span>
            </div>
        ))
      }
        </div>
        <div className="goodsSize">
        <span>x</span>
        <span>0</span>
        <span>选择规格&gt;</span>
        </div>
        <div className="goodsCommentList">
        <div className="goodsCommentTitle">
        <span>评论 ({common})</span>
        <span>查看全部&gt;</span>
        </div>
        <div className="commentItem">
        <div className="userInfo">
        <span>匿名用户</span><span>{list.add_time}</span>
        </div>
        <div className="userComment">
        <span>{list.content}</span>
        </div>
        </div>
      
        </div>
        </section>
        <footer className="footer">
          <span>☆</span>
          <span>购物</span>
          <span>加入购物车</span>
          <span>立即购买</span>
        </footer>
      </>
    );
  }
  componentDidMount() {
    new Swiper(".phone", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      },
      observer: true,
      observeParents: true
    });
    this.props.homeDetail.change(this.props.match.params.id);
    this.props.homeDetail.goods(this.props.match.params.id);
  }
}

export default HomeDetail;
