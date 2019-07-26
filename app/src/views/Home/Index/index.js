import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "../../../scss/global.scss";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
@inject("home")
@observer
class index extends Component {
  render() {
    console.log(this.props.home);
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
                {
                  this.props.home.hot.map(item=>(
                    <dl key={item.id}>
                      <dt>
                        <img src={item.list_pic_url} alt=""/>
                      </dt>
                      <dd>{item.name}</dd>
                    </dl>
                  ))
                }

                </div>
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
      }
    });
    this.props.home.change();
  }
}

export default index;
