import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import '../../../../scss/sayMore.scss';

@inject("special")
@observer

class sayMore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sayvalue: ''
        };
    }

    render() {
        return (
            <div className="fillmessage-wrap">
                <div className="fillmessage-top">
                    <p className="iconfont iconfont icon-icon-arrow-left" onClick={this.gos}></p>
                    <p>填写留言</p>
                    <p></p>
                </div>
                <div className="fillmessage-cont">
                    <textarea className="fillmessage-textarea" onChange={(e) => this.say(e)} value={this.state.sayvalue}></textarea>
                    <button className="fillmessage-buttonLeft" onClick={this.cansle}>取消</button>
                    <button className="fillmessage-button" onClick={this.sayValue}>留言</button>
                </div>
            </div>
        )
    }
    say = (e) => {
        this.setState({
            sayvalue: e.target.value
        })
    }
    gos = () => {
        this.props.history.push({ pathname: '/home/detail/' + this.props.history.location.pathname.slice(14) })
    }
    sayValue = () => {
        this.props.history.go(-1)
        this.props.special.pingLuns(this.state.sayvalue, this.props.history.location.pathname.slice(14));
        this.setState({
            sayvalue: ''
        })
    }
    cansle = () => {
        this.props.history.go(-1);
    }
}

export default sayMore;