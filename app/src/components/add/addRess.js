import React, { Component } from 'react';
import address from './addressData'
import { PickerView, WhiteSpace } from 'antd-mobile';
import './add.scss'
import { Divider } from 'antd';

class addRess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }
    render() {
        return (
            <div className="pickers">
                <div className="pack">
                    <div className="picker">
                        <div className="top-btn">
                            <p>取消</p>
                            <p>确认</p>
                        </div>
                        <PickerView
                            onChange={this.onChange}
                            data={address}
                            value={this.state.value}
                        />
                    </div>
                </div>
            </div>
        );
    }
    onChange = (value) => {
        this.setState({
            value,
        });
    }
}

export default addRess;