import React, { Component } from 'react';
import address from './addressData.js'
import { PickerView } from 'antd-mobile';
import './add.scss'
import { inject, observer } from "mobx-react";

@inject("home")
@observer

class addRess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
    }
    render() {
        return (
            <div className={this.props.flags ? 'showZz' : 'pickers'}>
                <div className="pack">
                    <div className="picker">
                        <div className="top-btn">
                            <p onClick={() => this.props.cancle()}>取消</p>
                            <p onClick={() => this.props.oks()}>确认</p>
                        </div>
                        <PickerView
                            onChange={this.onChange}
                            onScrollChange={this.onScrollChange}
                            data={address}
                            value={this.state.value}
                            // cascade={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
    // onChange = (value) => {
    //     console.log(value)
    //     this.setState({
    //         value,
    //     });
    // }
    onScrollChange = (value) => {
        console.log(value);
        this.setState({
            value,
        });
    }
}

export default addRess;