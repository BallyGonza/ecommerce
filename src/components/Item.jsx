import React from 'react'

export function Item(props) {
    return (
        <>
            <img src={props.imgURL} alt="" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </>
    )
}
