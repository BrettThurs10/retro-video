export  function getRating(movieID, region, callback){
    const url = `https://api.themoviedb.org/3/movie/${movieID}/release_dates?api_key=3585210653285f5893d87d7328bced74`
     fetch(url)
  .then(response => response.json())
  .then(data => {
      let result = data.results.filter(country => country.iso_3166_1 == region)
      result = result[0].release_dates[0].certification
      callback(result)
  })
}


