import React, { Component } from 'react';
import Footer from '../../../components/footer/footer'
import '../../../scss/shop.scss';
import { inject, observer } from "mobx-react";
import { Toast } from 'antd-mobile';

@inject("shop")
@observer

class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            con: false,
            flag:false,
            class:"none",
            count:0,
            price:0,
            product:0,
            arr:0,
            arrList:[]
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
                                    <section key={item.id} className={item.number===0?"none":null}>
                                        <div className="checks">
                                            <span className={item.checked ? 'icon iconfont icon-check-circle check' : 'icon iconfont icon-check-circle actives'} onClick={()=>this.choosed(item.checked,item.product_id)}></span>
                                        </div>
                                        <div className="left">
                                            <img src={item.list_pic_url} alt="" />
                                        </div>
                                        <div className="right">
                                            <p><span className="name">{item.goods_name}</span></p>
                                            <p className="moneys">
                                                <span className="it_price">￥{item.market_price}</span>
                                                <i className="carss">
                                                    <span onClick={()=>this.addNum(item.id,item.goods_id,item.number-1,item.product_id)}>-</span>
                                                    <span>{item.number}</span>
                                                    <span onClick={()=>this.addNum(item.id,item.goods_id,item.number+1,item.product_id)}>+</span>
                                                </i>
                                            </p>
                                        </div>
                                    </section>
                                ))
                            ) : (
                                    this.props.shop && this.props.shop.data.map(item => (
                                        <section key={item.id}  className={item.number===0?"none":null}>
                                            <div className="checks">
                                                <span className={item.checked ? 'icon iconfont icon-check-circle actives' : 'icon iconfont icon-check-circle check'} onClick={()=>this.choose(item.checked,item.product_id)}></span>
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
                    {
                        this.state.flag?<span className='icon iconfont icon-check-circle actives' onClick={()=>this.all()}></span>:<span className="icon iconfont icon-check-circle check" onClick={()=>this.all()}></span>
                    }
                       
                    </div>
                    <section className="sec">
                    {
                        this.state.con? <span className="num">已选({this.state.arr})</span>:<span className="num">已选({this.state.count})<span className="price">￥{this.state.price}</span></span>
                        
                    }
                       
                        <h1 className="bianji" onClick={this.handleClick}>{this.state.con ? '完成' : '编辑'}</h1>
                        {
                        this.state.con? <p className="btn" onClick={()=>this.del()}>删除所选</p>:<p className="btn" onClick={()=>this.error()}>下单</p>
                        }
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
    choose=(checked,product_id)=>{//不选中是1  选中是0
        let num=checked===1?0:1;
      let str={isChecked:num,productIds:product_id};
       this.props.shop.checked(str);
       let data=this.props.shop.data.filter(item=>item.checked==0)
       if(data.length===data.length){
        this.setState({
            flag:false
        })
    }else{
        this.setState({
            flag:true
        })
    }
    this.setState({
        count:this.props.shop.count,
        price:this.props.shop.price
    })
    }
    all=()=>{
       this.setState({
           flag:!this.state.flag
       })
        let num=this.state.flag===false?1:0;
        let data=this.props.shop.data.map(item=>item.product_id);
       this.props.shop.checked({isChecked:num,productIds:data});
       this.setState({
        count:this.props.shop.count,
        price:this.props.shop.price
    })
    }
    choosed=(checked,product_id)=>{//不选是0 选中为1
        let num=checked===1?0:1;
        let str={isChecked:num,productIds:product_id};
        this.props.shop.checked(str);
        if(num===1){
            this.setState({
                arr:++this.state.arr
            })
        }else{
            this.setState({
                arr:--this.state.arr
            })
        }
        console.log(this.state.arr);
        this.setState({
            product:product_id
        })
    }
   del=()=>{//删除
    let id=this.state.product;
    console.log(typeof(id));
//      if(e.target.innerHTML==="删除所选"){
// alert();
//      }
     this.props.shop.Del({productIds:JSON.stringify(id)});

    }
    addNum=(id,goods_id,number,product_id)=>{
        let num=number>0?number:0;
this.props.shop.updated({
    goodsId: goods_id,
    id: id,
    number: num,
    productId: product_id
})
    }
    error(){
        Toast.loading("下单功能还未GET,耐心等待~")
      }
}

export default shop;