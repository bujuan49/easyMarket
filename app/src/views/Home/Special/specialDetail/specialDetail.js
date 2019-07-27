import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import '../../../../scss/specialDetail.scss';
@inject("home")
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
                    <span className="back">←</span>
                    <span>{this.props.home.specialList.title}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: this.props.home.specialList.content }} className="topical_detail_main"></div>
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
                        this.props.home && this.props.home.speList.map(item => (
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
        this.props.home.speDetail(this.props.match.params.id)
        this.props.home.speDetailList(this.props.match.params.id)
    }
    // handleClicks = (id) => {
    //     console.log(id)
    //     this.props.history.push({ pathname: '/home/detail/' + id })

    // }
}

export default specialDetail;