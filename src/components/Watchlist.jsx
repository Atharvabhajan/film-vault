import React, { useState } from "react";
import Moviestable from "./Moviestable";
import '.././App.css';


function Watchlist({ watchlist, removewatchlist, setWatchlist, type }) {
  const [search, setInput] = useState("");
  const [buttype, setButType] = useState("All Types");

  const handelcolor = (e) => {
    setButType(e);
  };
  const handlechange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="watchlist-functions">
        <div className="buttons">
          {type.map((movietype, index) => (
            <button
              onClick={() => handelcolor(movietype)}
              key={index}
              className={movietype==buttype?'active':'inactive'}
            >
              {movietype.charAt(0).toUpperCase() +
                movietype.slice(1).toLowerCase()}
            </button>
          ))}
        </div>

        <div className="search-box">
          <input
            type="text"
            onChange={handlechange}
            value={search}
            placeholder="Search for movies"
          ></input>
        </div>
      </div>
      <div>
        <Moviestable
          search={search}
          watchlist={watchlist}
          removewatchlist={removewatchlist}
          setWatchlist={setWatchlist}
          buttype={buttype}
        />
      </div>
    </>
  );
}

export default Watchlist;
