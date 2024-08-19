import React, { useState, useEffect } from "react";
import ".././App.css";
import Moviebox from "./Moviebox";
import axios from "axios";
import Pagenation from "./Pagenation";

function Movies({addwatchlist,removewatchlist,watchlist}) {
  const [movies, setMovie] = useState([]);
  const [pageno, setPage] = useState(1);

  const prevpage = () => {
    if (pageno === 1) {
      setPage(1);
    } else {
      setPage(pageno - 1);
    }
  };
  const nextpage = () => {
    setPage(pageno + 1);
  };
  // useEffect(() => {
  //   axios.get('https://freetestapi.com/api/v1/movies')
  //     .then((res) => {
  //       console.log("API Response:", res.data);  // Log the API response to confirm structure
  //       setMovie(res.data || []); // Set the correct data
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching data:", err); // Handle errors
  //       setMovie([]);  // Set movies to an empty array in case of an error
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(`https://omdbapi.com/?apikey=3e7a0670&s=Batman&page=${pageno}`)
      .then((res) => {
        // console.log("API Response:", res.data.Search); // Log the API response to confirm structure
        setMovie(res.data.Search || []);
        // console.log("movie res:", movies); // Log the API response to confirm structure
        // Set the correct data
      })
      .catch((err) => {
        // console.error("Error fetching data:", err); // Handle errors
        setMovie([]); // Set movies to an empty array in case of an error
      });
  }, [pageno]);

  return (
    <div className="movies">
      <div className="title">Trending Movies</div>
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((movieobj) => (
            <Moviebox
              key={movieobj.imdbID}
              movieobj={movieobj}
              poster={movieobj.Poster}
              name={movieobj.Title}
              addwatchlist={addwatchlist}
              removewatchlist={removewatchlist}
              watchlist={watchlist}
            />
          ))
        ) : (
          <div>Loading movies or no data available</div>
        )}
      </div>
      <Pagenation pageno={pageno} prevpage={prevpage} nextpage={nextpage} />
    </div>
  );
}

export default Movies;

// https://omdbapi.com/?apikey=3e7a0670&s=Batman&page=3
