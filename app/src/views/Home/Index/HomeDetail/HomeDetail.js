import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import "../../../../scss/HomeDetail.scss";
@inject("homeDetail")
class HomeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props.match.params.id);
        console.log(this.props);
        let {name,price}=this.props.location.state;
        return (
          <>
          <header>
          <span>&lt;</span>
          <span>{name}</span>
          <span></span>
          </header>
          <section>

          </section>
          <footer>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </footer>
          </>  
        );
    }
    componentDidMount(){
        this.props.homeDetail.change(this.props.match.params.id);
    }
}

export default HomeDetail;