import React, { useState, useEffect } from 'react'
import Rating from './components/Rating'
import PropTypes from 'prop-types'
import ReactDOM from "react-dom";
import * as utils from './assets/utils'
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
    const [providers, setProviders] = useState('')
    const [rating, setRating] = useState('🤔')
    const [poster, setPoster] = useState(imageBase + imageSize + data.backdrop_path)
    let { id } = useParams();
    console.log(data)
    useEffect(() => {
        utils.getProviders(data.id, 'US', (val)=>setProviders(val))
        utils.getRating(data.id, 'US', (val)=>setRating(val))
    }, [])
    return (
        <div className="bg-gray-900 w-full h-screen overflow-y-scroll">
<div className="w-full h-72 flex bg-cover rounded-lg items-end"  style={{ backgroundImage: `url(${poster})` }}>
    <div className="flex flex-col p-8 text-left bg-purple-800 rounded-tr-lg bg-opacity-90">
        <p className="text-gray-200 text-xs">Released {data.release_date}</p>
    <p className="text-4xl text-white font-bold mb-2">{data.title}</p>
   <div className="flex flex-row items-center">
       <Rating rating={rating} />
    {providers}</div>
    </div>
</div>
        </div>
    )
}

Details.propTypes = {

}

export default Details

