import React, { Component } from 'react';
import Footer from '../../../components/footer/footer'
import '../../../scss/shop.scss';
import { inject, observer } from "mobx-react";

@inject("shop")
@observer

class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            con: false
        };
    }
    render() {
        return (
            <>
                <div className="shop">
                    <div className="starts">
                        <p><span>★</span> 三十天无忧退货</p>
                        <p><span>★</span> 48小时快速退款</p>
                        <p><span>★</span> 满88元免邮费</p>
                    </div>
                    <div className="car">
                        {
                            this.state.con ? (
                                this.props.shop && this.props.shop.data.map(item => (
                                    <section key={item.id}>
                                        <div className="checks">
                                            <span className={item.checked ? 'check' : 'active'}>√</span>
                                        </div>
                                        <div className="left">
                                            <img src={item.list_pic_url} alt="" />
                                        </div>
                                        <div className="right">
                                            <p><span className="name">{item.goods_name}</span></p>
                                            <p className="moneys">
                                                <span className="it_price">￥{item.market_price}</span>
                                                <i className="carss">
                                                    <span>-</span>
                                                    <span>{item.number}</span>
                                                    <span>+</span>
                                                </i>
                                            </p>
                                        </div>
                                    </section>
                                ))
                            ) : (
                                    this.props.shop && this.props.shop.data.map(item => (
                                        <section key={item.id}>
                                            <div className="checks">
                                                <span className={item.checked ? 'icon iconfont icon-check-circle check' : 'icon iconfont icon-check-circle actives'}></span>
                                            </div>
                                            <div className="left">
                                                <img src={item.list_pic_url} alt="" />
                                            </div>
                                            <div className="right">
                                                <p><span className="name">{item.goods_name}</span><span>X{item.number}</span></p>
                                                <p className="money">￥{item.market_price}</p>
                                            </div>
                                        </section>
                                    ))
                                )
                        }
                    </div>

                </div>
                <div className="bottom">
                    <div className="checks">
                        <span className='icon iconfont icon-check-circle circle'></span>
                    </div>
                    <section className="sec">
                        <span className="num">已选(0)</span>
                        <h1 className="bianji" onClick={this.handleClick}>{this.state.con ? '完成' : '编辑'}</h1>
                        <p className="btn">下单</p>
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
        })
    }
}

export default shop;