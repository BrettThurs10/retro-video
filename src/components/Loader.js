import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Loader(props) {
    return (
        <FontAwesomeIcon color={props.color} size={props.size} icon={faSpinner} spin />

    )
}


export default Loader

