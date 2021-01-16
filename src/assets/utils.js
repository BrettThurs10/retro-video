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

export const imageBase = 'http://image.tmdb.org/t/p'

export function buildImgURL(size, path){
return imageBase + '/' + size + path
}

export  function getProviders(movieID, region, callback){
    const url = `https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=3585210653285f5893d87d7328bced74`
    console.log(url)
     fetch(url)
  .then(response => response.json())
  .then(data => {
     if (data.results){
        let array = []
        let providers = data.results[region].rent
        providers.map(
            x => array.push(
            <img className="w-6 h-6 mr-2" src={`${buildImgURL('original', x.logo_path)}`} />
        ))
        let row = <div className="flex flex-row">{array}</div>
        callback(row)
     }
  })
}

export function numFromRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const icons = {
    search: <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" height="30" viewBox="0 0 30 25" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  film: <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" height="30" viewBox="0 0 30 25" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
</svg>,
home: <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" height="30" viewBox="0 0 30 25" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>,
info: <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" height="30" viewBox="0 0 30 25" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>,
idCard: <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" height="30" viewBox="0 0 30 25" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
</svg>,
}


