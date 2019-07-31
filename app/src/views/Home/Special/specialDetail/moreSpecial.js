import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import '../../../../scss/specialDetail.scss';

@inject("special")
@observer

class moreSpecial extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="heads">
                    <span className="icon iconfont icon-icon-arrow-left" onClick={this.goMore}></span><span>查看更多评论</span>
                </div>
                <div className="moreSpecials">
                    {
                        this.props.special.discuss.map(item => (
                            <div className="time" key={item.id}>
                                <p>{item.add_time}</p>
                                <p>{item.content}</p>
                            </div>
                        ))
                    }
                </div>
            </>
        );
    }
    goMore = () => {
        this.props.history.go(-1)
    }
    componentDidMount() {
        this.props.special.discussList(this.props.history.location.pathname.slice(17))
    }
}

export default moreSpecial;