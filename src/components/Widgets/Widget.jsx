import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Widget(props) {
    return (
        <div>
            <FontAwesomeIcon icon={props.icon} />
        </div>
    )
}
