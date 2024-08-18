import React from 'react'

function Moviebox({movieobj,poster,name,addwatchlist,removewatchlist,watchlist}) {
  // console.log(poster);
  // console.log(name);

  function doescontain(movie){
    // console.log(watchlist.length)
    for(let a=0 ; a < watchlist.length; a++){
      if(watchlist[a].imdbID === movie.imdbID){
        return true
      }
    }
    return false
  }

  return (
    <div className='movie-box' style={{backgroundImage:`url(${poster})`}}>

    {doescontain(movieobj) ? (
      <div className='emoji'><button onClick={()=>(removewatchlist(movieobj))}>
        &#10060;</button></div>
     
    ) : (
      <div className='emoji'><button onClick={()=>(addwatchlist(movieobj))}>
      &#128525;</button></div>
    ) };
        <div className='movie-name'>{name}</div>
    </div>
  )
}

export default Moviebox