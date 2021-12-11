import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext } from '../Context/cartContext'
import { useContext } from 'react'

export function Widget(props) {

    const { totalItemsCarrito } = useContext(CartContext)

    return (
        <div>
            <FontAwesomeIcon icon={props.icon} className='' />{totalItemsCarrito ? totalItemsCarrito : null}
        </div>
    )
}
