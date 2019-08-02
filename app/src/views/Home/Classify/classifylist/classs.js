import React, { Component } from 'react';
import '../../../../scss/classs.scss';
import { inject, observer } from 'mobx-react';

@inject('classify')
@observer

class classs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vals: '',
            valNull: ''
        };
    }
    render() {
        return (
            <div className="classs">
                <header>
                    <span className="icon iconfont icon-icon-arrow-left" onClick={this.goback}></span>
                    <input type="text" placeholder="520元礼包抢先领"
                        onKeyDown={(e) => this.changeHelper(e)}
                        ref='inp'
                    />
                    <span onClick={this.spanCancle}>取消</span>
                </header>
                <div className="his">
                    <p>历史记录</p>
                    <ul>
                        <li>母亲节</li>
                        <li>墨镜</li>
                        <li>日式</li>
                    </ul>
                </div>
                <div className='hots'>
                    <p>热门搜索</p>
                    <ol>
                        {this.props.classify && this.props.classify.historyList.map((item, index) => (
                            <li key={index}>{item.keyword}</li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
    goback = () => {
        this.props.history.go(-1)
    }
    componentDidMount() {
        this.props.classify.historys();
    }
    changeHelper = (e) => {
        console.log(this.refs.inp.value)
        var evt = window.event || e;
        if (evt.keyCode === 13) {
            //回车事件
            this.props.classify.helpers(this.refs.inp.value);
            this.refs.inp.value=""
        }
    }
}

export default classs;