import React, { Component } from 'react';
import '../../../../scss/classifydetail.scss'

class classifylist extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="mains">
                <div className="headerTops">
                    <span className="back">←</span>
                    <span>奇趣分类</span>
                </div>
            </div>
        );
    }
}

export default classifylist;