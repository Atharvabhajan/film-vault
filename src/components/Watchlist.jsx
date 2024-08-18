import React, { useState } from "react";
import Moviestable from "./Moviestable";

function Watchlist({ watchlist,removewatchlist,setWatchlist }) {
  
  let [search,setInput]=useState('');

  const handlechange=(e)=>{
    setInput(e.target.value);
  }


  return (
    <>
      <div className="watchlist-functions">
        <div className="buttons">
          <button>All Types</button>
        </div>

        <div className="search-box">
          <input type="text" onChange={handlechange} value={search} placeholder="Search for movies"></input>
        </div>
      </div>
      <div>
          <Moviestable search={search} watchlist={watchlist} removewatchlist={removewatchlist} setWatchlist={setWatchlist}/>
      </div>
    </>
  );
}

export default Watchlist;
