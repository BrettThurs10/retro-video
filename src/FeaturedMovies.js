import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const imageBase = 'http://image.tmdb.org/t/p'
const imageSize = '/w500'

function getPosterURL(data, index){
    // console.log(data)
    return `${imageBase}${imageSize}${data.poster_path}`
}

function getFeaturedMovieItem(data, index){

    return(

 <div
        style={{
            backgroundImage: `url(${getPosterURL(data, index)})`}}
        className="transform hover:-translate-y-7 cursor-pointer bg-red-500 transition ease-out duration-200 w-32 h-48 m-1 rounded-sm shadow-lg bg-cover relative hover:border vidTape"
           >
           </div>


    )
}

function returnFeaturedMovies(data){
    console.log(data)
    let featuredMovieArr = []
    data.map((x,index)=>featuredMovieArr.push(getFeaturedMovieItem(x,index)))
    return featuredMovieArr
}

function FeaturedMovies(props) {
    const data = props.data
    return (
        <>

        <div className="w-screen overflow-scroll">

          {data.results &&
            <div style={{width: '2800px'}} className="p-8 flex">
                {returnFeaturedMovies(data.results)}
                </div>
            }
        </div>
        </>
    )
}

export default FeaturedMovies

