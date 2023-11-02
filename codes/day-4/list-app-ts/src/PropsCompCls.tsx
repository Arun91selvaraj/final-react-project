import React, { Component } from 'react'

type PropsCompClsPropType = {
    sampleAttr: string,
    //sampleFnAttr: (e: SyntheticEvent) => void
    sampleFnAttr: () => void
}
export default class PropsCompCls extends Component<PropsCompClsPropType, {}> {
    // constructor(propObj: PropsCompClsPropType) {
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
