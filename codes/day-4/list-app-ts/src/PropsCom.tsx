import React, { SyntheticEvent } from 'react'

type PropsCompPropType = {
    sampleAttr: string,
    sampleFnAttr: (e: SyntheticEvent) => void
    //sampleFnAttr: () => void
}
const PropsComp = (propObj: Readonly<PropsCompPropType>) => {
    //propObj.sampleAttr = 'other'
    return (
        <div>
            Data:&nbsp;{propObj.sampleAttr}
            <br />
            <button type='button' onClick={propObj.sampleFnAttr}>Click</button>
        </div>
    )
}
export default PropsComp