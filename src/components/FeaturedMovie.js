import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import * as utils from "../assets/utils.js"
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Loader from './Loader';

const randomYear = () => Math.floor(Math.random() * (20 - 1 + 1)) + 1;

function percent(num){
    return(
       `${ Math.floor((num / 10) * 100)}`
    )
}

const spinner = <Loader color="purple" size="lg" />
const playButton = <PlayCircleOutlineIcon fontSize="large" style={{ color: "white" }} />


function FeaturedMovie(props) {
  const data = props.data;
  const poster = props.poster;
  const featuredYear = props.featuredYear;
  const region = 'US';
  const [rating, setRating] = useState('🤔');
  const [loaded, setLoaded] = useState(false)

  function loader(val){
    setRating(val)
    setLoaded(true)
  }

  function returnSpinner(){
      return(
        <div className="absolute z-40">
        <div className={`transform scale-150 ${loaded ? 'opacity-0' : 'opacity-100'}`}>
          {spinner}
        </div>
        <div className={`transform scale-150 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {playButton}
        </div>
        </div>
      )
  }

  useEffect( () => {
    utils.getRating(data.id, region, (val) => loader(val))
  }, [])

  const title = data?.title.replace(/\s/g, "-").toLowerCase()

  return (
    <Link
    to={`/${title}`} className="flex flex-row w-full h-72 text-left bg-center cursor-pointer bg-purple-900 hover:bg-blue-900 duration-200 transition ease-in-out h-72"
    onClick={()=>props.setActiveData(data)}
    >
      {/* <div  className="shadow-lg border border-gray-800 bg-center bg-cover rounded-lg flex w-72 pb-40 relative h-72"></div> */}

      <div className="flex flex-col pl-4 w-1/4 m-5 justify-center relative">

        <p className="text-green-300 text-xs">{`Rewind to ${featuredYear} with`}</p>
        <h2 className="text-white rubik text-2xl text-left text-yellow-300">
          {data.title}
        </h2>
        <p className="text-white text-xs text-gray-400 mb-3">
          Released {data.release_date}
        </p>
      <div className="flex flex-row items-center">
      <p className="text-white border py-1 px-3 rounded mr-4">{rating}</p>
        <div className="bg-green-400 h-9 w-9 justify-center flex items-center rounded-full">
        <p className="text-gray-700 text-sm">{percent(data.vote_average)}</p>
        </div>
      </div>
      </div>
      <div className="flex h-full w-full justify-center items-center">
       {returnSpinner()}
        <div
        style={{ backgroundImage: `url(${poster})` }}
        className={`rounded-lg shadow-sm border border-green-500 transform scale-90 relative z-0 flex bg-cover bg-top h-full w-full justify-center items-center overflow-hidden relative transition-all duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
      </div>
      </div>


    </Link>
  );
}

FeaturedMovie.propTypes = {};

export default FeaturedMovie;
