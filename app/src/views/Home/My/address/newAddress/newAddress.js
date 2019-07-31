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
            arr: '江苏省/南京市/玄武区',
            vale: [],
            names: '',
            phones: '',
            texts: ''
        }
    }
    render() {
        console.log(this.state.names, this.state.phones, this.state.texts)
        return (
            <>
                <div className="addres">
                    <h2>新增地址</h2>
                    <div className="discribe">
                        <input type="text" placeholder="姓名" onChange={(e) => this.changeName(e)} value={this.state.names} />
                        <input type="text" placeholder='电话号码' onChange={(e) => this.changePhones(e)} value={this.state.phones} />
                        <p className="address-my" onClick={this.showFlag}>
                            {this.state.arr}
                        </p>
                        <input type="textarea" placeholder="详细地址" onChange={(e) => this.changeText(e)} value={this.state.texts} />
                        <div className="moren">
                            <p onClick={this.set}>设置默认地址</p>
                            {this.state.num === false ? <p className='icon iconfont icon-check-circle'></p> : <p className="iconfont icon-check-circle nweaddressnum"></p>}
                        </div>
                    </div>
                    <div className="bottom-btn">
                        <p className="btn-cancle" onClick={this.cl}>取消</p>
                        <p className="btn-save" onClick={this.saveAddress}>保存</p>
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
                                onChange={this.remember}
                                data={address}
                                value={this.state.vale}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
    changeName = (e) => {
        this.setState({
            names: e.target.value
        })
    }
    changePhones = (e) => {
        this.setState({
            phones: e.target.value
        })
    }
    changeText = (e) => {
        this.setState({
            texts: e.target.value
        })
    }
    saveAddress = () => {
        if (!this.state.names || !this.state.phones || !this.state.texts) {
            alert('请重新输入')
        } else {
            const params = {
                name: this.state.names,
                mobile: this.state.phones,
                province_id: 2,
                city_id: 37,
                district_id: 403,
                is_default: true,
                address: this.state.texts
            }
            this.props.home.addressSaves(params);
            this.props.history.push('/home/address')
        }

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
            arr: value[0] + '/' + value[1] + '/' + value[2],
            vale: value
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