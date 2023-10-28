import React from 'react'

import "../Components.css"

const Order = (props) => {
    return (
        <div className = "order">
            <div className = "order-image">
            </div>
            <h2> {props.name}</h2>
            <h3>Review: {props.review} </h3>
        </div>
    )
}

export default Order