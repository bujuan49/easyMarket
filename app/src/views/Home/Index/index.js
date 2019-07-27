import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "../../../scss/global.scss";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import List from "../../../component/List/List";
@inject("home")
@observer
class index extends Component {
  render() {
    return (
      <>
        <section>
          <header>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {/* <div className="swiper-slide">1</div>
              <div className="swiper-slide">2</div> */}
                {this.props.home &&
                  this.props.home.data.map(item => (
                    <div className="swiper-slide" key={item.id}>
                      <img src={item.image_url} alt="" />
                    </div>
                  ))}
              </div>
              <div className="swiper-pagination" />
            </div>
          </header>

          <div className="list">
            {this.props.home &&
              this.props.home.List.map(item => (
                <dl key={item.id}>
                  <dt>
                    <img src={item.icon_url} alt="" />
                  </dt>
                  <dd>{item.name}</dd>
                </dl>
              ))}
          </div>
          <div className="list_name">
            <span className="tit">品牌制造商直供</span>
            <ul>
              {this.props.home.dataList.map(item => (
                <li key={item.id}>
                  <img src={item.new_pic_url} alt="" />
                  <div>
                    <span>
                      {item.name}
                      <br />
                      <p>{item.floor_price}元起</p>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="list_product">
            <span className="tit">新品首发</span>
            <div className="dls">
              {this.props.home.product.map(item => (
                <dl key={item.id}>
                  <dt>
                    <img src={item.list_pic_url} alt="" />
                  </dt>
                  <dd>
                    <span>{item.name}</span>
                    <span>￥{item.retail_price}</span>
                  </dd>
                </dl>
              ))}
            </div>
          </div>
          <div className="list_hot">
            <span className="tit">人气推荐</span>
            <div className="hotGoodsBox">
              {this.props.home.hot.map(item => (
                <dl key={item.id}>
                  <dt>
                    <img src={item.list_pic_url} alt="" />
                  </dt>
                  <dd>
                    <div>
                      <span>{item.name}</span>
                      <span>{item.goods_brief}</span>
                      <span>￥{item.retail_price}</span>
                    </div>
                  </dd>
                </dl>
              ))}
            </div>
          </div>
          <div className="list_top">
            <span className="tit">专题精选</span>
            <div className="topGoodsWrap">
              <div className="swiper-container banner">
                <ul
                  className="swiper-wrapper"
                  style={{ width: "337px", height: "187px" }}
                >
                  {this.props.home.topicList.map(item => (
                    <div key={item.id} className="swiper-slide">
                      <li>
                        <img src={item.item_pic_url} alt="" />
                      </li>
                      <span>{item.title}</span>
                      <span>￥0元起</span>
                      <p>{item.subtitle}</p>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="list_cateGoryName">
            <span className="ti">居家</span>
            <List accessories={this.props.home.channel}></List>
           
          </div>
          <div className="list_cateGoryName">
            <span className="ti">餐厨</span>
            <List accessories={this.props.home.kitchen}></List>
          </div>
          <div className="list_cateGoryName">
            <span className="ti">饮食</span>
            <List accessories={this.props.home.diet}></List>
          </div>
          <div className="list_cateGoryName">
            <span className="ti">配件</span>
          <List accessories={this.props.home.accessories}></List>
          </div>
          <div className="list_cateGoryName">
            <span className="ti">服装</span>
          <List accessories={this.props.home.clothing}></List>
          </div>
          <div className="list_cateGoryName">
            <span className="ti">婴童</span>
          <List accessories={this.props.home.body}></List>
          </div>
          <div className="list_cateGoryName">
            <span className="ti">杂货</span>
          <List accessories={this.props.home.store}></List>
          </div>
          <div className="list_cateGoryName">
            <span className="ti">洗护</span>
          <List accessories={this.props.home.personal}></List>
          </div>
          <div className="list_cateGoryName">
            <span className="ti">志趣</span>
          <List accessories={this.props.home.inclination}></List>
          </div>
        </section>
      </>
    );
  }
  componentDidMount() {
    new Swiper(".swiper-container", {
      loop: true, //这里是自动轮播
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      },
      observer: true,
      observeParents: true
    });
    new Swiper(".banner", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true
    });
    this.props.home.change();
  }
}

export default index;
