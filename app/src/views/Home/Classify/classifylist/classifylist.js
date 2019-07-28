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
                <div className="headerTops">
                    <span className="back" onClick={this.goBack}>←</span>
                    <span>奇趣分类</span>
                </div>
                <div className="nav">
                    {
                        this.props.classify && this.props.classify.goodList.map(item => (
                            <span key={item.id}>{item.name}</span>
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
        this.props.history.go(-1)
    }
}

export default classifylist;