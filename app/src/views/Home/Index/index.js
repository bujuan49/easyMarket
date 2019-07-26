import React, { Component } from 'react';
import {inject,observer}from "mobx-react";
import "../../../scss/global.scss";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import Footer from '../../../components/footer/footer'
@inject("home")
@observer
class index extends Component {
    render() {
        // console.log(this.props.home);
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
                ss
            </section>
            <Footer />
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
                el: '.swiper-pagination',//这里是分页器设置
            }
        });
        this.props.home.change();
    }
    
}

export default index;