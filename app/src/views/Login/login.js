import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import '../../scss/login.scss'

@inject("home")
@observer

class Login extends Component {
    state = {
        phone: "",
        pwd: ""
    }
    render() {
        return (
            <div className="login">
                <div className="head">
                    <img src="https://yanxuan.nosdn.127.net/15361406976541303.png" alt="" className="logo" />
                </div>
                <div className="input">
                    <input type="text" placeholder="请输入手机号" onChange={(e) => this.changePhone(e)} value={this.state.phone} />
                    <input type="password" placeholder="请输入密码" onChange={(e) => this.changePass(e)} value={this.state.pwd} />
                </div>
                <div className="foot">
                    <button className="button" onClick={this.submit}>登录</button>
                </div>
            </div>
        )
    }
    changePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }
    changePass = (e) => {
        this.setState({
            pwd: e.target.value
        })
    }
    submit = () => {
        let { phone, pwd } = this.state;
        this.props.home.getLogin(phone, pwd);
        if (this.props.home.loginUser === 0) {
            this.props.history.push('/home/index');
        } else if (this.props.home.loginUser === 1000) {
            alert('phone或password错误！');
        }
        this.setState({
            phone: '',
            pwd: ''
        })
    }
}
export default Login