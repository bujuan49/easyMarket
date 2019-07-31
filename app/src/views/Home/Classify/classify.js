import React, { Component } from 'react';
import "../../../scss/classify.scss";
import { inject, observer } from 'mobx-react';
import Footer from '../../../components/footer/footer'


@inject('classify')
@observer

class classify extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goto = (id, item) => {
        this.props.history.push({ pathname: `/home/classifylist/${id}`, params: item })
    }
    componentDidMount() {
        this.props.classify.catalogList();
    }
    render() {

        return (
            <>
            <div className='wrap'>
                <div className="fl-header">
                    <div>
                        <i></i>
                        <p onClick={this.goClass}>搜索商品，共21458款好物</p>
                    </div>
                </div>
                <div className="fl-main">
                    <div className="fl-left">
                        <ul>
                            {
                                this.props.classify.data && this.props.classify.data.map((item, index) => {
                                    // 
                                    return <li key={item.id} className={item.type ? 'active' : null}
                                        onClick={() => this.props.classify.cataList(item)}
                                    >{item.name}
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                    <div className="fl-right">
                        <div className="fl-right-wrap">
                            <div className="fl-right-top">
                                <img src={this.props.classify.dataList.wap_banner_url} alt="" />
                            </div>
                            <div className="fl-right-con">
                                {
                                    this.props.classify.dataLists && this.props.classify.dataLists.map((item, index) => {
                                        return <dl className="fl-right-list" key={item.id} onClick={() => this.goto(item.id, item)}>
                                            <dt>
                                                <img src={item.wap_banner_url} alt="" />
                                            </dt>
                                            <dd>
                                                <span>{item.name}</span>
                                            </dd>
                                        </dl>
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
            </>
        );
    }
    goClass=()=>{
        this.props.history.push('/home/classs')
    }
}

export default classify;