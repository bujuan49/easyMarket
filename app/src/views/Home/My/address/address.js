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

                    </div>
                    <p className="button">新建地址</p>
                </div>
            </>
        );
    }
}

export default address;