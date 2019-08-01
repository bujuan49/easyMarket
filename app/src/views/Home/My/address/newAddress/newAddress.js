import React, { Component } from 'react';
import '../../../../../scss/newAddress.scss'
<<<<<<< HEAD
import { inject, observer } from "mobx-react";
import { PickerView, WhiteSpace } from 'antd-mobile';
import address from './addressData'
=======
import Pack from '../../../../../component/add/addRess'
// import { Checkbox } from 'antd-mobile';
import { inject, observer } from "mobx-react";

// const CheckboxItem = Checkbox.CheckboxItem;
>>>>>>> 7a7e78795475f7acabad9c9c3cae9567db66a41e

@inject("home")
@observer

class newAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            num: false,
            nums:false,
            arr: '江苏省/南京市/玄武区',
            vale: [],
            names: '',
            namess: '',
            phones: '',
            phoness: '',
            texts: '',
            textss: ''
        }
    }
    render() {
        const { findname, findAdd, findDEtail, mobileNum, findNumberOne, findNumberTwo, findNumberThree } = this.props.home;
        console.log(this.props.home.mobileNum)
        return (
            <div className="newaddress">
                <div className="addres">
                    <h2>{this.props.history.location.pathname.slice(17) ? '修改地址' : '新建地址'}</h2>
                    {
                        this.props.history.location.pathname.slice(17) ? (
                            <>
                                <div className="discribe">
                                    <input type="text" placeholder="姓名" onChange={(e) => this.changeNames(e)} defaultValue={findname} />
                                    <input type="text" placeholder='电话号码' onChange={(e) => this.changePhone(e)} defaultValue={mobileNum} />
                                    <p className="address-my" onClick={this.showFlag}>
                                        {findDEtail}
                                    </p>
                                    <input type="textarea" placeholder="详细地址" onChange={(e) => this.changeTexts(e)} defaultValue={findAdd} />
                                    <div className="moren">
                                        <p onClick={this.sets}>设置默认地址</p>
                                        {this.state.nums === false ? <p className='icon iconfont icon-check-circle'></p> : <p className="iconfont icon-check-circle nweaddressnum"></p>}
                                    </div>
                                </div>
                                <div className="bottom-btn">
                                    <p className="btn-cancle" onClick={this.cls}>取消</p>
                                    <p className="btn-save" onClick={this.saveAddresss}>保存</p>
                                </div>
                            </>
                        ) : (
                                <>
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
                                </>
                            )
                    }

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
            </div>
        );
    }
    changeNames = (e) => {
        this.setState({
            namess: e.target.value
        })
    }
    changeName = (e) => {
        this.setState({
            names: e.target.value
        })
    }
    changePhone = (e) => {
        this.setState({
            phoness: e.target.value
        })
    }
    changePhones = (e) => {
        this.setState({
            phones: e.target.value
        })
    }
    changeTexts = (e) => {
        this.setState({
            textss: e.target.value
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
                is_default: this.state.num,
                address: this.state.texts
            }
            this.props.home.addressSaves(params);
            this.props.history.push('/home/address')
        }

    }
    saveAddresss = () => {
        const params = {
            name: this.state.namess ? this.state.namess : this.props.name.findname,
            mobile: this.state.phoness,
            province_id: 2,
            city_id: 37,
            district_id: 403,
            is_default: this.state.nums,
            address: this.state.textss,
            id: this.props.history.location.pathname.slice(17)
        }
        this.props.home.addressSaves(params);
        this.props.history.push('/home/address')
    }
    cl = () => {
        this.props.history.go(-1)
    }
    cls = () => {
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
    sets = () => {
        this.setState({
            nums: !this.state.num
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
    componentDidMount() {
        if (this.props.history.location.pathname.slice(17)) {
            this.props.home.findAddress(this.props.history.location.pathname.slice(17))
        }
    }
}

export default newAddress;