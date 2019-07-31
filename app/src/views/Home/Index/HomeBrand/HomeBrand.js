import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "../../../../scss/HomeBrand.scss";
@inject("home")
@observer
class HomeBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      let {brand,mode}=this.props.home;
      console.log(brand);
    return (
      <>
      <div className="header"> 
          <span onClick={()=>this.go()}>&lt;</span>
          <span>{brand.name}</span>
          <span></span>
      </div>
      <div className="section">
      <div className="box">
      <img src={brand.app_list_pic_url} alt=""/>

      </div>
      <span className="content">{brand.simple_desc}</span>
      <div className="mode">
{
    mode&&mode.map(item=>(
        <dl onClick={()=>this.detail(item.id,item.name)} key={item.id}>
            <dt>
                <img src={item.list_pic_url} alt=""/>
            </dt>
            <dd>
            <span> {item.name}</span>
            <span>￥{item.retail_price}</span>
           </dd>
        </dl>
    ))
}
      </div>
      </div>
       
      </>
    );
  }
  componentDidMount(){
    this.props.home.goods(this.props.match.params.id);
    this.props.home.list(this.props.match.params.id);
  }
  go=()=>{
    this.props.history.go(-1);
  }
  detail = (id,name) => {
    this.props.history.push({ pathname: `/home/goods/${id}`,state:{name:name} });
  };
}

export default HomeBrand;
