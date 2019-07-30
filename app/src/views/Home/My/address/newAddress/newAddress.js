import React, { Component } from 'react';
import '../../../../../scss/newAddress.scss'
import Pack from '../../../../../components/add/addRess'
import { Checkbox } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;

class newAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="addres">
                <h2>新增地址</h2>
                <div className="discribe">
                    <input type="text" placeholder="姓名" />
                    <input type="text" placeholder='电话号码' />
                    {/* <Pack /> */}
                    <p className="address-my">
                        江苏省/南京市/玄武区
                    </p>
                    <input type="textarea" placeholder="详细地址" />
                    <div className="moren">
                        <p>设置默认地址</p>
                        <p className="icon iconfont icon-check-circle"></p>
                    </div>

                </div>
                <div className="bottom-btn">
                    <p className="btn-cancle" onClick={this.cl}>取消</p>
                    <p className="btn-save">保存</p>
                </div>
            </div>
        );
    }
    cl=()=>{
        this.props.history.go(-1)
    }

}

export default newAddress;