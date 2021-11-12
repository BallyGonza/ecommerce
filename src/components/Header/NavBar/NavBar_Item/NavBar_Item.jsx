import React from 'react'

export function NavBar_Item(props) {
    return (
        <li>
            <a href={props.url}>{props.title}</a>
        </li>
    )
}
