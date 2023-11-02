import React from 'react'
import PropTypes from 'prop-types'

const PropsComp = (propObj) => {
    return (
        <div>
            Data:&nbsp;{propObj.sampleAttr}
            <br />
            <button onClick={propObj.sampleFnAttr}>Click</button>
        </div>
    )
}
PropsComp.propTypes = {
    sampleAttr: PropTypes.string.isRequired,
    sampleFnAttr: PropTypes.func
}
export default PropsComp