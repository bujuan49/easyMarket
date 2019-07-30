import React, { Component } from 'react';
import '../.../../../../../scss/collect.scss';
import { inject, observer } from "mobx-react";

@inject("home")
@observer

class collect extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="main">
                    <div className="headerTop">
                        <span className="back" onClick={this.goBack}>←</span>
                        <span>商品收藏</span>
                    </div>
                    <div className="listss">
                        {
                            this.props.home && this.props.home.dataLists.map(item => (
                                <div className="lists" key={item.id}>
                                    <img src={item.list_pic_url} alt="" />
                                    <div className="right">
                                        <p>{item.goods_brief}</p>
                                        <p>{item.name}</p>
                                        <p className='money'>￥{item.retail_price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        );
    }
    componentDidMount() {
        this.props.home.collects(0)
    }
    goBack = () => {
        this.props.history.go(-1)
    }
}

export default collect;