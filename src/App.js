import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './Header'
import FeaturedMovies from './FeaturedMovies'

const APIKEY = '3585210653285f5893d87d7328bced74';
const imageBase = 'http://image.tmdb.org/t/p'
const imageSize = '/original'

 function App() {
  const [data, setData] = useState('');
  const [poster, setPoster] = useState(null)
  async function getPopularMovies(){
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&primary_release_year=1984&sort_by=popularity.desc`

    await fetch(url).then(response => response.json())
    .then(data=>{setPoster(imageBase+imageSize+data.results[0].backdrop_path); console.log(data.results[0]); setData(data)})
  }

  async function init(){
  await getPopularMovies();
  }

 useEffect( () => {
  init()
 }, [])


  return (
    <div className="App">
      <Header />
      <div style={{backgroundImage: `url(${poster})`}} className="bg-cover rounded flex w-full h-screen">
      </div>
      <FeaturedMovies data={data} />
    </div>
  );
}

export default App;
