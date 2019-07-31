import React, { Component } from 'react';
import '../../../../../scss/newAddress.scss'
import { inject, observer } from "mobx-react";
import { PickerView, WhiteSpace } from 'antd-mobile';
import address from './addressData'

@inject("home")
@observer

class newAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            num: false,
            arr: '江苏省/南京市/玄武区'
        }
    }
    render() {
        return (
            <>
                <div className="addres">
                    <h2>新增地址</h2>
                    <div className="discribe">
                        <input type="text" placeholder="姓名" />
                        <input type="text" placeholder='电话号码' />
                        <p className="address-my" onClick={this.showFlag}>
                            {this.state.arr}
                        </p>
                        <input type="textarea" placeholder="详细地址" />
                        <div className="moren">
                            <p onClick={this.set}>设置默认地址</p>
                            {this.state.num === false ? <p className='icon iconfont icon-check-circle'></p> : <p className="iconfont icon-check-circle nweaddressnum"></p>}
                        </div>
                    </div>
                    <div className="bottom-btn">
                        <p className="btn-cancle" onClick={this.cl}>取消</p>
                        <p className="btn-save">保存</p>
                    </div>
                </div>
                <div className={this.state.flag ? 'showZz' : 'pickers'}>
                    <div className="pack">
                        <div className="picker">
                            <div className="top-btn">
                                <p onClick={this.cancle}>取消</p>
                                <p onClick={this.oks}>确认</p>
                            </div>
                            <WhiteSpace /><WhiteSpace />
                            <PickerView
                                data={address}
                                value={['2', '2-1', '2-1-1']}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
    cl = () => {
        this.props.history.go(-1)
    }
    showFlag = () => {
        this.setState({
            flag: true
        })
    }
    show = () => {
        this.setState({
            flag: false
        })
    }
    set = () => {
        this.setState({
            num: !this.state.num
        })
    }
    remember = (value) => {
        console.log(value)
        this.setState({
            arr: value
        })
    }
    cancle = () => {
        this.setState({
            flag: false
        })
    }
    oks = () => {
        this.setState({
            flag: false
        })
    }
}

export default newAddress;