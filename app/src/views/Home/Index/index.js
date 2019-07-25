import React, { Component } from 'react';
import {inject,observer}from "mobx-react";
import "../../../scss/global.scss";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
@inject("home")
@observer
class index extends Component {
    render() {
        console.log(this.props.home);
        return (
            <>
            <header>
            <div className='swiper-container'>
                <div className='swiper-wrapper'>
                {
                       this.props.home && this.props.home.data.map(item => (
                           <div className="swiper-slide" key={item.id}>
                              <img src={item.image_url} alt="" />
                             </div>
                                    ))

                                }

                </div>
                <div className='swiper-pagination'></div>
            </div>
            </header>
            <section>
                <div className="list">
                    {
                        this.props.home && this.props.home.List.map(item=>(
                        <span key={item.id}>{item.name}</span>
                        )) 
                    }
                </div>
                            
            </section>
            </>
        );
    }
    componentDidMount() {
        new Swiper('.swiper-container',{
            loop: true,//这里是自动轮播
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type:"bullets"
              }
        });
        this.props.home.change();
    }
    
}

export default index;