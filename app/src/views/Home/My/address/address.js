import React, { Component } from 'react';
import '../.../../../../../scss/address.scss';
import { inject, observer } from "mobx-react";

@inject("home")
@observer

class address extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="content">
                    <div className="headerTop">
                        <span className="back" onClick={this.goBack}>←</span>
                        <span>地址管理</span>
                    </div>
                    <div className="adds">
                        <section>
                            <div className="myname">
                                赵鑫雨
                            </div>
                            <div className="addres">
                                <p>15011111111</p>
                                <p>吉林省长春市南关区</p>
                                <p>上地软件园38</p>
                            </div>
                            <div className="icon iconfont icon-filedone"></div>
                        </section>
                    </div>
                    <div className="button" onClick={this.go}>新建地址</div>
                </div>
            </>
        );
    }
    goBack = () => {
        this.props.history.go(-1)
    }
    componentDidMount() {
        this.props.home.addresss();
    }
    go=()=>{
        this.props.history.push('/home/newAddress')

    }
}

export default address;