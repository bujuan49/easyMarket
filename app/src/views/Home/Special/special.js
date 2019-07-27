import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../../../scss/special.scss";
import Footer from '../../../components/footer/footer'


@inject("home")
@observer

class special extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        // const {specialData} = this.props;
        console.log(this.props.home.specialData)
        return (
            <>
            ss
                {/* <div className="container">
                    {
                        this.props.home && this.props.home.specialData.map(item => (
                            <div key={item.id} className="everyCont" onClick={() => this.handleClick(item.id)}>
                                <img src={item.scene_pic_url} alt="" className="img" />
                                <p className="title">{item.title}</p>
                                <p className="subtitle">{item.subtitle}</p>
                                <p className="money">{item.price_info}</p>
                            </div>
                        )
                        )
                    }
                </div> */}
                <Footer />
            </>
        );
    }
    componentDidMount() {
       // this.props.home.getSpecial();

    }
    handleClick = (id) => {
        this.props.history.push({ pathname: '/home/detail/' + id })
    }
}

export default special;