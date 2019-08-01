import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../../../scss/special.scss";
import Footer from '../../../components/footer/footer'


@inject("special")
@observer

class special extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="spe-main">
                <div className="spe-container">
                    {
                        this.props.special && this.props.special.specialData.map(item => (
                            <div key={item.id} className="everyCont" onClick={() => this.handleClick(item.id)}>
                                <img src={item.scene_pic_url} alt="" className="img" />
                                <p className="title">{item.title}</p>
                                <p className="subtitle">{item.subtitle}</p>
                                <p className="money">{item.price_info}</p>
                            </div>
                        )
                        )
                    }
                </div>
                <Footer />
            </div>
        );
    }
    componentDidMount() {
        this.props.special.getSpecial();

    }
    handleClick = (id) => {
        this.props.history.push({ pathname: '/home/detail/' + id })
    }
}

export default special;