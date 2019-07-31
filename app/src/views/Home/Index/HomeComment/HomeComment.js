import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../../../../scss/HomeComment.scss";
@inject("homeDetail")
@observer
class HomeComment extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {comment}=this.props.homeDetail;
        return (
          <>
          <header className="header">
          <span onClick={()=>this.go()}>&lt;</span>
          <span>查看更多评论</span>
          <span></span>
          </header>
          <section className="section">
          {
              comment.map(item=>(
                <div className="commentItem" key={item.id}>
                <div className="userInfo">
                <span>匿名用户</span>
                <span>{item.add_time}</span>
              </div>
              <div className="userComment">
                <span>{item.content}</span>
                <div className="userimg">
                  {item.pic_list&&item.pic_list.map(item => (
                    <img src={item.pic_url} alt="" key={item.id} />
                  ))} 
                </div>
              </div>   
              </div>
              ))
          }
             
          </section>
          </>  
        );
    }
    componentDidMount(){
        this.props.homeDetail.remark(this.props.match.params.id);
    }
    go=()=>{
        this.props.history.go(-1);
    }
}

export default HomeComment;