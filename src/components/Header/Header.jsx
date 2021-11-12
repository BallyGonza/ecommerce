import React from 'react'
import { NavBar } from './NavBar/NavBar'
import { Widget } from '../Widgets/Widget'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export function Header() {
    return (
        <header>
            <NavBar />
            <Widget icon={faShoppingCart} />
        </header>
    )
}
