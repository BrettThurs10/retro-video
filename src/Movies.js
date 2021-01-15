import React, { useEffect, useState } from 'react'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import PropTypes from 'prop-types'
const APIKEY = '3585210653285f5893d87d7328bced74';
const imageBase = 'http://image.tmdb.org/t/p'
const imageSize = '/w500'

function getPosterURL(data, index){
    // console.log(data)
    return `${imageBase}${imageSize}${data.poster_path}`
}






function Movies(props) {
    const [data, setData] = useState('')
    async function getPopularMovies(year){
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&primary_release_year=${year}&sort_by=revenue.desc`
        await fetch(url).then(response => response.json())
        .then(data=>setData(data))
        return data
      }

useEffect(() => {
 getPopularMovies(props.year)
}, [])


function getMovieItem(data, index){
    console.log(data)
    const title = data?.title.replace(/\s/g, "-").toLowerCase()
    return(

 <Link to={`/${title}`}
        style={{
            backgroundImage: `url(${getPosterURL(data, index)})`}}
        className="transform scale-100 hover:scale-110 cursor-pointer bg-gray-300 transition ease-out duration-200 w-32 h-48 m-1 rounded-sm shadow-lg bg-cover relative hover:border vidTape"
        onClick={()=>props.setActiveData(data)}
           >
           </Link>
    )
}

function returnMovies(data, setActiveData){
    let featuredMovieArr = []
    data.map((x,index)=>featuredMovieArr.push(getMovieItem(x,index, setActiveData)))
    return featuredMovieArr
}

    return (
        <div id={props.year} className="border-t border-indigo-900 bg-gray-900 h-80">
      <button class="flex w-screen px-10 py-3 text-green-500 text-xl gugi items-center hover:bg-indigo-900 group">
      {props.year}
      <div className="transform transition duration-200 group-hover:translate-x-20">
          <DoubleArrowIcon style={{marginLeft: '5px'}} fontSize="large"/>
          </div>
      </button>
        <div className="w-screen overflow-scroll">

          {data.results &&
            <div style={{width: '3000px'}} className="py-4 px-8 flex bg-gray-900">
                {returnMovies(data.results, props.setActiveData)}
                </div>
            }
        </div>
        </div>
    )
}

export default Movies

