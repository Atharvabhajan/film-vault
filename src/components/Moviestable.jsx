import React from "react";
import ".././App.css";

function Moviestable({ search, watchlist, removewatchlist, setWatchlist,buttype }) {
  function sortasc() {
    let sortedincreasing = [...watchlist].sort((movieA, movieB) => {
      return parseInt(movieA.Year) - parseInt(movieB.Year);
    });

    setWatchlist(sortedincreasing);
  }
  function sortdesc() {
    let sorteddecreasing =[...watchlist].sort((movieA, movieB) => {
      return parseInt(movieB.Year) - parseInt(movieA.Year);
    });

    setWatchlist(sorteddecreasing);
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="img-cell"></th>
            <th>Name</th>
            <th>
              <button onClick={sortasc}><i className="fa-solid fa-arrow-up" ></i></button> Year{" "}
              <button  onClick={sortdesc}><i className="fa-solid fa-arrow-down"></i></button>
            </th>
            <th>ImdbID</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {watchlist.filter((movie)=>{
            if(buttype==="All Types"){
              return true;
            }
            else{
              return movie.Type === buttype;
            }
          })
            .filter((movie) => {
              return movie.Title.toLowerCase().includes(
                search.toLocaleLowerCase()
              );
            })
            .map((movie) => (
              <tr key={movie.imdbID}>
                <td className="img-cell">
                  <img src={movie.Poster} alt="movie poster"></img>
                </td>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.imdbID}</td>
                <td>{movie.Type}</td>
                <td className="delete-but">
                  <button onClick={() => removewatchlist(movie)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Moviestable;
