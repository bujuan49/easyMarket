import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import '../../../../scss/specialDetail.scss';
@inject("special")
@observer

class specialDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        };
    }
    render() {
        return (
            <div className="main">
                <div className="headerTop">
                    <span className="back" onClick={this.goBack}>←</span>
                    <span>{this.props.special.specialList.title}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: this.props.special.specialList.content }} className="topical_detail_main"></div>
                <div className="titleLine">
                    <p className="line">精选留言</p>
                    <p className="icon iconfont icon-jingzi"></p>
                </div>
                <div className="all">
                    <dt className="icon iconfont icon-mianmo"></dt>
                    <dd>等你来留言</dd>
                </div>
                <p className="messages">
                    推荐专题
                </p>
                <div className="containers">
                    {
                        this.props.special && this.props.special.speList.map(item => (
                            <div key={item.id} className="everyCont">
                                {/* onClick={() => this.handleClicks(item.id)} */}
                                <img src={item.scene_pic_url} alt="" className="img" />
                                <p className="title">{item.title}</p>
                                <p className="subtitle">{item.subtitle}</p>
                                <p className="money">{item.price_info}</p>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.special.speDetail(this.props.match.params.id)
        this.props.special.speDetailList(this.props.match.params.id)
        this.props.special.idDiscuss(this.props.match.params.id)

    }
    // handleClicks = (id) => {
    //     console.log(id)
    //     this.props.history.push({ pathname: '/home/detail/' + id })

    // }
    goBack=()=>{
        this.props.history.go(-1)
    }
}

export default specialDetail;