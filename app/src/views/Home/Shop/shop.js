import React, { Component } from 'react';
import Footer from '../../../components/footer/footer'
import '../../../scss/shop.scss';
class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
           <div className="shop">
               <div className="start">
                   <p><span>⭐</span> 三十天无忧退货</p>
                   <p><span>⭐</span> 48小时快速退款</p>
                   <p><span>⭐</span> 满88元免邮费</p>
               </div>
           </div>
           <Footer />

           </>
        );
    }
}

export default shop;