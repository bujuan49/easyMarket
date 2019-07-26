import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

@inject("home")
@observer

class specialDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>

            </>
        );
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        // this.props.match.params.id
        // this.props.home.specialDetail()
    }
}

export default specialDetail;