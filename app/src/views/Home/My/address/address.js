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
                    <div className="headerts">
                        <span className="back" onClick={this.goBack}>←</span>
                        <span>地址管理</span>
                    </div>
                    <div className="adds">
                        {
                            this.props.home && this.props.home.addressList.map(item => (
                                <section key={item.id}>
                                    <div className={item.is_default ? 'myname' : 'youname'}>
                                        {item.name}
                                    </div>
                                    <div className="addres">
                                        <p>{item.mobile}</p>
                                        <p>吉林省长春市南关区</p>
                                        <p>上地软件园38</p>
                                    </div>
                                    <div className="icon iconfont icon-filedone"></div>
                                </section>
                            ))

                        }

                    </div>
                    <div className="button" onClick={this.go}>新建地址</div>
                </div>
            </>
        );
    }
    goBack = () => {
        this.props.history.push('/home/my')
    }
    componentDidMount() {
        this.props.home.addresss();
    }
    go = () => {
        this.props.history.push('/home/newAddress')

    }
}

export default address;