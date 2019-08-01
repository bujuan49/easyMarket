import React, { Component } from 'react';
import '../.../../../../../scss/address.scss';
import { inject, observer } from "mobx-react";
import { Popconfirm, Icon } from 'antd';

@inject("home")
@observer

class address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: 0,
            num: false
        };
    }
    render() {
        return (
            <>
                <div className="content">
                    <div className="headerts">
                        <span className="icon iconfont icon-icon-arrow-left back" onClick={this.goBack}></span>
                        <span>地址管理</span>
                    </div>
                    <div className="adds">
                        {
                            this.props.home && this.props.home.addressList.map(item => (
                                <section key={item.id}>
                                    <div className={item.is_default ? 'myname' : 'youname'}>
                                        {item.name}
                                    </div>
                                    <div className="addres" onClick={()=>this.gotoDiscribe(item.id)}>
                                        <p>{item.mobile}</p>
                                        <p>吉林省长春市南关区</p>
                                        <p>上地软件园38</p>
                                    </div>
                                    <div>
                                        <Popconfirm
                                            className={this.state.num ? 'showFire' : null}
                                            title="确认删除吗？"
                                            title="删除"
                                            cancelText="取消"
                                            okText="确认"
                                            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                                        >
                                            <a href="#"></a>
                                        </Popconfirm>
                                    </div>
                                    <div className="icon iconfont icon-iconfontshanchu1" style={{ color: '#ccc' }} onClick={() => this.showFire(item.id)}></div>
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
    gotoDiscribe = (id) => {
        this.props.history.push({ pathname: '/home/newAddress/' + id})
    }
    showFire = (id) => {
        console.log(id)
        this.setState({
            num: true
        })
        this.props.home.deleteAddressAll(id)
    }
}

export default address;