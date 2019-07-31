import React, { Component } from 'react';
import address from './addressData.js'
import { PickerView, WhiteSpace } from 'antd-mobile';
import './add.scss'
import { inject, observer } from "mobx-react";
console.log(address)

@inject("home")
@observer

class addRess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: [{
                "label": "北京",
                "value": '2',
                "children": [{
                    "label": "北京市",
                    "value": '2-1',
                    "children": [{
                        "label": "东城区",
                        "value": '2-1-1'
                    }, {
                        "label": "西城区",
                        "value": '2-1-2'
                    }, {
                        "label": "崇文区",
                        "value": '2-1-3'
                    }, {
                        "label": "其它区",
                        "value": '2-1-4'
                    }]
                }]
            }, {
                "label": "天津",
                "value": '3',
                "children": [{
                    "label": "天津市",
                    "value": '3-1',
                    "children": [{
                        "label": "和平区",
                        "value": '3-1-1'
                    }, {
                        "label": "河东区",
                        "value": '3-1-2'
                    }, {
                        "label": "河西区",
                        "value": '3-1-3'
                    }, {
                        "label": "南开区",
                        "value": '3-1-4'
                    }]
                }]
            }, {
                "label": "河北省",
                "value": '4',
                "children": [{
                    "label": "石家庄市",
                    "value": '4-1',
                    "children": [{
                        "label": "长安区",
                        "value": '4-1-1'
                    }, {
                        "label": "桥东区",
                        "value": '4-1-2'
                    }, {
                        "label": "桥西区",
                        "value": '4-1-3'
                    }, {
                        "label": "新华区",
                        "value": '4-1-4'
                    }]
                }]
            }],
            value: []

        };
    }
    render() {
        return (
            
        );
    }
    // onChange = (value) => {
    //     console.log(value);
    //     this.setState({
    //         value,
    //     });
    // }
}

export default addRess;