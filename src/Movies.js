import React, { useEffect, useState } from 'react'

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
        className="transform scale-100 hover:scale-110 cursor-pointer bg-red-500 transition ease-out duration-200 w-32 h-48 m-1 rounded-sm shadow-lg bg-cover relative hover:border vidTape"
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
        <>
        <p className="text-left">{props.year}</p>
        <div className="w-screen overflow-scroll">

          {data.results &&
            <div style={{width: '2800px'}} className="p-8 flex">
                {returnMovies(data.results)}
                </div>
            }
        </div>
        </>
    )
}

export default Movies

