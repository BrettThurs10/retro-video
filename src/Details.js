import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const imageBase = "http://image.tmdb.org/t/p";
const imageSize = "/original";

function Details(props) {
    const data = props.data
    const [poster, setPoster] = useState(imageBase + imageSize + data.poster_path)
    let { id } = useParams();

    return (
        <div className="bg-red-300 w-full h-screen overflow-y-scroll">
<div className='flex flex-row m-5 h-96'>
    <div className="w-1/4 rounded-lg h-full">
        <div className="w-full h-full flex bg-cover rounded-lg"  style={{ backgroundImage: `url(${poster})` }}></div>
    </div>
    <div className="bg-purple-900 w-3/4 rounded-lg h-80 p-2">

</div>

</div>
        </div>
    )
}

Details.propTypes = {

}

export default Details

