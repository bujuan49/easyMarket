import React, { Component } from 'react';
import '../../../../scss/classifydetail.scss';
import { inject, observer } from 'mobx-react';

@inject('classify')
@observer

class classifylist extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="mains">
                <div className="headerTopp">
                    <span className="backk" onClick={this.goBack}>←</span>
                    <span>奇趣分类</span>
                </div>
                <div className="navss">
                    {
                        this.props.classify && this.props.classify.goodList.map(item => (
                            <span key={item.id} onClick={() => this.showList(item.id)}>{item.name}</span>
                        ))
                    }
                </div>
                <div className="dis">
                    <p>{this.props.classify.des.name}</p>
                    <p>{this.props.classify.des.front_name}</p>
                </div>
                <div className="nav-mains">
                    {
                        this.props.classify && this.props.classify.list.map(item => (
                            <div className="inside" key={item.id}>
                                <p>
                                    <img src={item.list_pic_url} alt="" />
                                </p>
                                <p>{item.name}</p>
                                <p>{item.retail_price}</p>
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
}

export default classifylist;