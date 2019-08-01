import React, { Component } from 'react';
import '../.../../../../../scss/collect.scss';
import { inject, observer } from "mobx-react";
import { SwipeAction, List } from 'antd-mobile';

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
                <div className="collect-main">
                    <div className="collect-top">
                        <span className="icon iconfont icon-icon-arrow-left over" onClick={this.goBack}></span>
                        <span>商品收藏</span>
                    </div>
                    <div className="collect-list">
                        {
                            this.props.home && this.props.home.dataList.map((item) => {
                                return <List key={item.id}>
                                    <SwipeAction
                                        style={{ backgroundColor: 'gray' }}
                                        autoClose
                                        right={[
                                            {
                                                text: '删除',
                                                onPress: () => this.props.home.addordeletes(item),
                                                style: { backgroundColor: '#F4333C', color: 'white', width: '60px' },
                                            },
                                        ]}
                                    >
                                        <List.Item onClick={e => console.log(e)}>
                                            <div className="lists">
                                                <dl>
                                                    <dt>
                                                        <img src={item.list_pic_url} alt="" />
                                                    </dt>
                                                    <dd className="right">
                                                        <p>{item.goods_brief}</p>
                                                        <p>{item.name}</p>
                                                        <p className='money'>￥{item.retail_price}</p>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </List.Item>
                                    </SwipeAction>
                                </List>
                            })
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