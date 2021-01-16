import React from 'react'

function Rating(props) {
    return (
        <p className="flex justify-center items-center text-white border py-1 px-3 rounded mr-4">{props.rating}</p>

    )
}

export default Rating

