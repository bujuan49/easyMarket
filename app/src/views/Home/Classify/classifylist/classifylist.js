import React, { Component } from 'react';
import '../../../../scss/classifydetail.scss';
import { inject, observer } from 'mobx-react';

@inject('classify')
@observer

class classifylist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="mains">
                <div className="headerTopp">
                    <span className="icon iconfont icon-icon-arrow-left backk" onClick={this.goBack}></span>
                    <span>奇趣分类</span>
                </div>
                <div className="classNav">
                    {
                        this.props.classify && this.props.classify.goodList.map(item => (
                            <span key={item.id} onClick={() => this.showList(item.id)}>{item.name}</span>
                        ))
                    }
                </div>
                <div className="nav-dis">
                    <p>{this.props.classify.des.name}</p>
                    <p>{this.props.classify.des.front_name}</p>
                </div>
                <div className="nav-mains">
                    {
                        this.props.classify && this.props.classify.list.map(item => (
                            <div className="inside" key={item.id} onClick={() => this.detail(item.id, item.name)}>
                                <p>
                                    <img src={item.list_pic_url} alt="" />
                                </p>
                                <p>{item.name}</p>
                                <p style={{ "textAlign": "center" }}>￥{item.retail_price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.classify.good(this.props.match.params.id);
    }
    goBack = () => {
        this.props.history.go(-1);
    }
    showList = (id) => {
        this.props.classify.goods(id);
    }
    detail = (id, name) => {
        this.props.history.push({
            pathname: `/home/goods/${id}`,
            state: { name: name }
        });
    }
}

export default classifylist;