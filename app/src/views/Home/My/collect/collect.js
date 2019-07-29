import React, { Component } from 'react';
import '../.../../../../../scss/collect.scss';
import { inject, observer } from "mobx-react";

@inject("home")
@observer

class collect extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>收藏</>
        );
    }
    componentDidMount(){
        this.props.home.collects(0)
    }
}

export default collect;