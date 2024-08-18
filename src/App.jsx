import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  useEffect(()=>{
    const storedmovies=localStorage.getItem('movies');
    if(storedmovies){
      setWatchlist(JSON.parse(storedmovies));
    }
  },[])

  const addwatchlist = (movieobj) => {
    let newwatchlist = [...watchlist, movieobj];
    setWatchlist(newwatchlist);
    localStorage.setItem('movies',JSON.stringify(newwatchlist))
    // console.log(newwatchlist);
  };
  const removewatchlist = (movieobj) => {
    let filteredwatchlist = watchlist.filter((movie) => {
      return movie.imdbID !== movieobj.imdbID;
    });
    localStorage.setItem('movies',JSON.stringify(filteredwatchlist));
    setWatchlist(filteredwatchlist);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner />{" "}
                <Movies
                  addwatchlist={addwatchlist}
                  removewatchlist={removewatchlist}
                  watchlist={watchlist}
                />{" "}
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <>
                {" "}
                <Watchlist watchlist={watchlist} removewatchlist={removewatchlist} setWatchlist={setWatchlist} />{" "}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
