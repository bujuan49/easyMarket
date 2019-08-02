import React, { Component } from 'react';
import '../.../../../../../scss/address.scss';
import { inject, observer } from "mobx-react";
import { Modal } from 'antd-mobile';
const alert = Modal.alert;

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
                    <div className="add-adds">
                        {
                            this.props.home && this.props.home.addressList.map(item => (
                                <section key={item.id}>
                                    <div className={item.is_default ? 'myname' : 'youname'}>
                                        {item.name}
                                    </div>
                                    <div className="addres" onClick={() => this.gotoDiscribe(item.id)}>
                                        <p>{item.mobile}</p>
                                        <p>吉林省长春市南关区</p>
                                        <p>上地软件园38</p>
                                    </div>
                                    <div className="icon iconfont icon-iconfontshanchu1" onClick={() => this.showAlert(item)}></div>
                                </section>
                            ))
                        }
                    </div>
                    <div className="add-button" onClick={this.go}>新建地址</div>
                </div>
            </>
        );
    }
    showAlert = (item) => {
        console.log(item)
        const alertInstance = alert('删除', '确认删除?', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确认', onPress: () => this.props.home.deleteAddressAll(item.id) },
        ]);
        setTimeout(() => {
            // 可以调用close方法以在外部close
            console.log('auto close');
            alertInstance.close();
        }, 500000);
    };

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
        this.props.history.push({ pathname: '/home/newAddress/' + id })
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