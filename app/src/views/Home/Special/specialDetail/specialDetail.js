import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

@inject("home")
@observer

class specialDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        };
    }
    render() {
        return (
            <>
                1234567
            </>
        );
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.home.speDetail(this.props.match.params.id)
    }
}

export default specialDetail;