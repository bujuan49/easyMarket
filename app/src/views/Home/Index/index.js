import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../../../scss/index.scss";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import List from "../../../components/List/List";
import Footer from "../../../components/footer/footer.js";
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
                <dl key={item.id} onClick={() => this.living(item.id, item)}>
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
                <li key={item.id} onClick={() => this.list_name(item.id)}>
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
                <dl
                  key={item.id}
                  onClick={() => this.detail(item.id, item.name)}
                >
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
                <dl
                  key={item.id}
                  onClick={() => this.detail(item.id, item.name)}
                >
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
                >
                  {this.props.home.topicList.map(item => (
                    <div key={item.id} className="swiper-slide" onClick={() => this.handleClick(item.id)}>
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
          <List type={this.props.home.type} list={this.props.home.List} />
        </section>
        <Footer />
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
  list_name = id => {
    this.props.history.push({ pathname: `/home/brand/${id}` });
  };
  detail = (id, name) => {
    this.props.history.push({
      pathname: `/home/goods/${id}`,
      state: { name: name }
    });
  };
  living = (id, item) => {
    this.props.history.push({
      pathname: `/home/classifylist/${id}`,
      params: item
    });
  };
  handleClick = (id) => {
    this.props.history.push({ pathname: '/home/detail/' + id })
  }
}

export default index;
