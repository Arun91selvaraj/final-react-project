import React from 'react'
import PropTypes from "prop-types";

const ItemList = (props) => {

    const liElements = props.listOfNames.map(
        (name) => {
            return <li>{name}</li>
        }
    )
    return (
        <div>
            <h3>List of Names</h3>
            <br />
            <ul>
                {
                    liElements
                }
            </ul>
        </div>
    )
}
ItemList.propTypes = {
    listOfNames: PropTypes.array.isRequired
}
export default ItemList