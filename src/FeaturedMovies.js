import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const imageBase = 'http://image.tmdb.org/t/p'
const imageSize = '/w500'

function getPosterURL(data, index){
    console.log(data)
    return `${imageBase}${imageSize}${data.poster_path}`
}


function getFeaturedMovieItem(data, index){
    return(
        <img
          className="w-24 h-38 mx-1 rounded shadow-lg"
          src={getPosterURL(data, index)} />
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
    console.log(props.data.results)
    return (
        <div className=" w-full absolute bottom-0 overflow-x-scroll">
          {data &&
            <div className="flex flex-row">
                {returnFeaturedMovies(data.results)}
                </div>
            }
        </div>
    )
}

export default FeaturedMovies

