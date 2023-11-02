import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class PropsCompCls extends Component {
    static propTypes = {
        sampleAttr: PropTypes.string.isRequired,
        sampleFnAttr: PropTypes.func.isRequired
    }
    // constructor(propObj) {
    //     super(propObj)
    //     console.log('in ctor', this.props)
    // }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.sampleAttr}
            </div>
        )
    }
}
