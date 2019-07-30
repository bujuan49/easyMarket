import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "../../../../scss/HomeDetail.scss";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import Look from "../../../../components/Look/look.js";
@inject("homeDetail")
@observer
class HomeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num:0,
      flag:false
    };
  }
  render() {
    let {
      phone,
      info,
      common,
      list,
      pic_list,
      attribute,
      issue,
      goodsList,
      inf,names
    } = this.props.homeDetail;
    let { name } = this.props.location.state;
    let {flag}=this.state;
    return (
      <>
        <div className="header">
          <span onClick={() => this.go()}>&lt;</span>
          <span>{name}</span>
          <span />
        </div>
        <section className="section">
          <div className="goodsBannerItem">
            <div className="swiper-container phone">
              <div className="swiper-wrapper">
                {phone.map(item => (
                  <div className="swiper-slide" key={item.id}>
                    <img src={item.img_url} alt=""/>
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
              <div>
                <span>{inf.name}</span>
                <span>{inf.goods_brief}</span>
                <span>￥{inf.retail_price}</span>
                {
                  typeof(names)=="string"? <span>{names}</span>:null
                }
              
              </div>
          </div>
          <div className="goodsSize">
            <span>x</span>
            <span>0</span>
            <span onClick={()=>this.flag()}>选择规格&gt;</span>
          </div>
          {
            common===0?null:  <div className="goodsCommentList">
            <div className="goodsCommentTitle">
              <span>评论 ({common})</span>
              <span onClick={()=>this.comment()}>查看全部&gt;</span>
            </div>
            <div className="commentItem">
              <div className="userInfo">
                <span>匿名用户</span>
                <span>{list.add_time}</span>
              </div>
              <div className="userComment">
                <span>{list.content}</span>
                <div className="userimg">
                  {pic_list&&pic_list.map(item => (
                    <img src={item.pic_url} alt="" key={item.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          }
        
          <div className="goodsAttribute">
            <div className="con">
              <span />
              <span>商品参数</span>
              <span />
            </div>
            <div className="goodsAttributeList">
              {attribute.map(item => (
                <div key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="topicDetailImg">
            {info.map((item,ind) => (
              <div
                dangerouslySetInnerHTML={{ __html: item.goods_desc }} key={ind}></div>
            ))}
          </div>

          <div className="goodsAttribute">
            <div className="con">
              <span />
              <span>常见问题</span>
              <span />
            </div>
            <div className="problemLabel">
              {issue.map(item => {
                return (
                  <div key={item.id} className="proble">
                    <div>
                      <span>√</span>
                      <span>{item.question}</span>
                    </div>
                    <div>{item.answer}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <div className="goodsAttributes">
            <div className="con">
              <span />
              <span>大家都在看</span>
              <span />
            </div>
            <div className="goodsList">
              {goodsList.map(item => (
                <dl key={item.id} onClick={()=>this.detail(item.id,item.name)}>
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
          </div> */}
        </section>
        <footer className="footer">
          <span>☆</span>
          <span>购物</span>
          <span>加入购物车</span>
          <span>立即购买</span>
        </footer>
        {
           flag===false?null: <Look callback={this.changeFlag.bind(this)}  price={inf.retail_price} goods_number={inf.goods_number} phone={phone}  flag={this.state.flag}/>
        }
       
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
  go = () => {
    this.props.history.go(-1);
  };
  detail=(id,name)=>{
    this.props.history.push({ pathname: `/home/goods/${id}`,state:{name:name} });
  }
  comment=()=>{
    this.props.history.push({pathname:`/home/comment/${this.props.match.params.id}`})
  }
  flag=()=>{
    this.setState({
      flag:true
    })
  }
  changeFlag(flag){
    this.setState({
      flag:false
    })
  }
}

export default HomeDetail;
