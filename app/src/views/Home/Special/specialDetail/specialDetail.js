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
                    <i className="icon iconfont icon-icon-arrow-left back" onClick={this.goBack}></i>
                    <span>{this.props.special.specialList.title}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: this.props.special.specialList.content }} className="topical_detail_main"></div>
                <div className="titleLine">
                    <p className="line">精选留言</p>
                    <p className="icon iconfont icon-edit-square" onClick={this.sayMore}></p>
                </div>
                <div className="all">
                    <section>
                        {
                            this.props.special.discuss.length > 0 ? this.props.special.discuss.map(item => (
                                <div className="time" key={item.id}>
                                    <p>{item.add_time}</p>
                                    <p>{item.content}</p>
                                </div>
                            )) : (
                                    <dl>
                                        <dt className="icon iconfont icon-filedone"></dt>
                                        <dd>欢迎来留言</dd>
                                    </dl>
                                )
                        }
                    </section>
                    <div className="lookss" onClick={this.doMore}>查看更多</div>
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
        this.props.special.discussList(this.props.match.params.id)

    }
    // handleClicks = (id) => {
    //     console.log(id)
    //     this.props.history.push({ pathname: '/home/detail/' + id })

    // }
    goBack = () => {
        this.props.history.go(-1)
    }
    doMore = () => {
        this.props.history.push({ pathname: '/home/moredetail/' + this.props.match.params.id })
    }
    sayMore = () => {
        this.props.history.push({ pathname: '/home/saymore/' + this.props.match.params.id })

    }
}

export default specialDetail;