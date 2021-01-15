import React, { useEffect, useState } from 'react'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import PropTypes from 'prop-types'
const APIKEY = '3585210653285f5893d87d7328bced74';
const imageBase = 'http://image.tmdb.org/t/p'
const imageSize = '/w500'

function getPosterURL(data, index){
    // console.log(data)
    return `${imageBase}${imageSize}${data.poster_path}`
}

function getMovieItem(data, index){

    return(

 <div
        style={{
            backgroundImage: `url(${getPosterURL(data, index)})`}}
        className="transform scale-100 hover:scale-110 cursor-pointer bg-gray-300 transition ease-out duration-200 w-32 h-48 m-1 rounded-sm shadow-lg bg-cover relative hover:border vidTape"
           >
           </div>


    )
}

function returnMovies(data){
    console.log(data)
    let featuredMovieArr = []
    data.map((x,index)=>featuredMovieArr.push(getMovieItem(x,index)))
    return featuredMovieArr
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
    return (
        <div id={props.year} className="border-t border-indigo-900 bg-gray-900 h-72">
      <button class="flex px-10 py-3 text-purple-400 text-xl gugi items-center hover:bg-indigo-900">{props.year}<DoubleArrowIcon style={{marginLeft: '5px'}} fontSize="medium"/></button>
        <div className="w-screen overflow-scroll">

          {data.results &&
            <div style={{width: '3000px'}} className="py-4 px-8 flex bg-gray-900">
                {returnMovies(data.results)}
                </div>
            }
        </div>
        </div>
    )
}

export default Movies

