import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import FeaturedMovies from "./FeaturedMovies";
import Movies from "./Movies";
import FeaturedMovie from "./components/FeaturedMovie";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Nav from './components/Nav'
import * as utils from './assets/utils'

const APIKEY = "3585210653285f5893d87d7328bced74";
const imageBase = "http://image.tmdb.org/t/p";
const imageSize = "/original";
const minYear = 1980;
const maxYear = 1999;
const featuredYr = utils.numFromRange(minYear, maxYear)
const featuredIndex = utils.numFromRange(1,20)

function App() {
  const [data, setData] = useState("");
  const [poster, setPoster] = useState(null);
  const [featuredYear, setFeaturedYear] = useState(featuredYr);

  async function getPopularMovies(year, index) {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&primary_release_year=${year}&sort_by=revenue.desc`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {

        if (data){
          setPoster(imageBase + imageSize + data.results[index]?.backdrop_path);
          setData(data);
        } else{
          getPopularMovies(year,index)
        }

      });
    return data;
  }

  async function init() {
    await getPopularMovies(featuredYear, featuredIndex);
  }

  useEffect(() => {
    init();
  }, []);

  function returnMovies() {
    const minYear = 1980;
    const maxYear = 2000;
    let counter = minYear;
    let movieArr = [];
    for (let index = counter; index < maxYear; index++) {
      movieArr.push(<Movies year={index} />);
    }
    return movieArr;
  }
  return (
    <div className="App flex w-full flex-row bg-gray-900 overflow-x-hidden">
      <div className="flex min-w-44 w-1/6 bg-black">
        <div className="flex fixed h-full w-1/6">
          <Nav />
        </div>
      </div>
      <div className="flex flex-col w-5/6 transition duration-200 bg-gray-900">
        {data && <FeaturedMovie featuredYear={featuredYear} data={data.results[featuredIndex]} poster={poster} />}
        {returnMovies()}
        </div>

    </div>
  );
}

export default App;
