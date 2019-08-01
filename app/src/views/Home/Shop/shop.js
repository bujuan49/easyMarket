import React, { Component } from "react";
import Footer from "../../../components/footer/footer";
import "../../../scss/shop.scss";
import { inject, observer } from "mobx-react";
import { Toast } from "antd-mobile";

@inject("shop")
@observer
class shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      con: false,
      flag: false,
      class: "none",
      count: 0,
      price: 0,
      product: 0,
      arr: 0,
      arrList: [],
      choose:0
    };
  }
  render() {
    return (
      <>
        <div className="shop">
          <div className="starts">
            <p>
              <span>★</span> 三十天无忧退货
            </p>
            <p>
              <span>★</span> 48小时快速退款
            </p>
            <p>
              <span>★</span> 满88元免邮费
            </p>
          </div>
          <div className="car">
            {//删除的
            this.state.con
              ? this.props.shop &&
                this.props.shop.data.map(item => (
                  <section
                    key={item.id}
                    className={item.number === 0 ? "none" : null}
                  >
                    <div className="checks">
                      <span
                        className={
                          item.checked
                            ? "icon iconfont icon-check-circle check"
                            : "icon iconfont icon-check-circle actives"
                        }
                        onClick={() =>
                          this.choosed(
                            this.state.arr,
                            item.checked,
                            item.product_id
                          )
                        }
                      />
                    </div>
                    <div className="left">
                      <img src={item.list_pic_url} alt="" />
                    </div>
                    <div className="right">
                      <p>
                        <span className="name">{item.goods_name}</span>
                      </p>
                      <p className="moneys">
                        <span className="it_price">￥{item.market_price}</span>
                        <i className="carss">
                          <span
                            onClick={() =>
                              this.addNum(
                                item.id,
                                item.goods_id,
                                item.number - 1,
                                item.product_id
                              )
                            }
                          >
                            -
                          </span>
                          <span>{item.number}</span>
                          <span
                            onClick={() =>
                              this.addNum(
                                item.id,
                                item.goods_id,
                                item.number + 1,
                                item.product_id
                              )
                            }
                          >
                            +
                          </span>
                        </i>
                      </p>
                    </div>
                  </section>
                ))
              : this.props.shop &&
                this.props.shop.data.map(item => (
                  <section
                    key={item.id}
                    className={item.number === 0 ? "none" : null}
                  >
                    <div className="checks">
                      <span
                        className={
                          item.checked
                            ? "icon iconfont icon-check-circle check"
                            : "icon iconfont icon-check-circle actives"
                        }
                        onClick={() =>
                          this.choose(item.checked, item.product_id)
                        }
                      />
                    </div>
                    <div className="left">
                      <img src={item.list_pic_url} alt="" />
                    </div>
                    <div className="right">
                      <p>
                        <span className="name">{item.goods_name}</span>
                        <span>X{item.number}</span>
                      </p>
                      <p className="money">￥{item.market_price}</p>
                    </div>
                  </section>
                ))}
          </div>
        </div>
        <div className="bottom">
          <div className="checks">
            {this.state.flag ? (
              <span
                className="icon iconfont icon-check-circle actives"
                onClick={() => this.all()}
              />
            ) : (
              <span
                className="icon iconfont icon-check-circle check"
                onClick={() => this.all()}
              />
            )}
          </div>
          <section className="sec">
            {this.state.con ? (
              <span className="num">已选({this.props.shop.ls.length})</span>
            ) : (
              <span className="num">
                已选({this.props.shop.con})
                <span className="price">￥{this.props.shop.pr}</span>
              </span>
            )}

            <h1 className="bianji" onClick={this.handleClick}>
              {this.state.con ? "完成" : "编辑"}
            </h1>
            {this.state.con ? (
              <p className="btn" onClick={() => this.del()}>
                删除所选
              </p>
            ) : (
              <p className="btn" onClick={() => this.error()}>
                下单
              </p>
            )}
          </section>
        </div>
        <Footer />
      </>
    );
  }
  componentDidMount() {
    this.props.shop.shops();
  }
  handleClick = () => {
    this.setState({
      con: !this.state.con
    });
  };
  all = () => {
    //全选
    this.setState({
      flag: !this.state.flag
    });
    console.log(this.state.flag);
    let num = this.state.flag === false ? 0 : 1;
    let data = this.props.shop.data.map(item => item.product_id);
    this.props.shop.checked({ isChecked: num, productIds: data });
  };
  choose = (checked, product_id) => {
    //单选  false选中
    let num = checked === 1 ? 0 : 1;
    let str = { isChecked: num, productIds: product_id };
    this.props.shop.checked(str);
    if (num === 0) {
      this.setState({
        flag: true
      });
    } else if (num === 1) {
      this.setState({
        flag: false
      });
    }
    console.log(num);
  };
  choosed = (arr, checked, product_id) => {
    //选中是true 1选中
    let num = checked === 1 ? 0 : 1;
    let str = { isChecked: num, productIds: product_id };
    this.props.shop.checked(str);
    let id = this.props.shop.data.filter(item => item.checked === 1);
    console.log(id);
    if (num === 0) {
      this.setState({
        flag: true
      });
    } else {
      this.setState({
        flag: false
      });
    }

  };
  del = () => {
    //删除
    this.props.shop.del.map(item=>
        this.props.shop.Del({productIds:JSON.stringify(item)})
      )
  };
  addNum = (id, goods_id, number, product_id) => {
    //添加数量
    let num = number > 0 ? number : 0;
    this.props.shop.updated({
      goodsId: goods_id,
      id: id,
      number: num,
      productId: product_id
    });
  };
  error() {
    Toast.loading("下单功能还未GET,耐心等待~");
  }
}

export default shop;
