import React, { Component } from 'react';
import "./look.scss";
class look extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        let {price,goods_number,phone,num,callback}=this.props;
        return (
            <>
               <div className="mark" onClick={()=>callback(this.props.flag)}>
               </div>
               <div className="markbox">
                <div className="title">
                <div className="dls">
                   <dl>
                    {
                      phone[0].img_url?<dt>米高哥</dt>:  <dt>
             <img src={phone[0].img_url} alt=""/> </dt>
                    }
                <dd>
                    <div>
                        <p>单价:</p>
                        <span>￥{price&&price}</span>
                    </div>
                    <div>
                        <p>库存:</p>
                        <span>{goods_number}件</span>
                    </div>
                    <div>已选择:</div>
                </dd>
                 </dl>   
                <div>
                    <span onClick={()=>callback(this.props.flag)}>X</span>
                    </div>
                </div>
            <div className="count">
            <span>数量</span>
            <div><span onClick={()=>this.prev(num)}>-</span><span>{num}</span><span onClick={()=>this.next(num)}>+</span></div>
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
    prev=(num)=>{
     if(num>0){
         return 
     }
    }
    next=(num)=>{
     console.log(num++);
    }
}

export default look;