import React from 'react'
import '.././App.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    // <div className='flex border space-x-10 items-center pl-3 py-4 bg-slate-300'>
    //     <i className="fa-solid fa-film text-5xl"></i>
    //     <a href="#" className='text-2xl text-blue-600 font-bold'>Movies</a>
    //     <a href="#" className='text-2xl text-blue-600 font-bold'>Watchlist</a>
    // </div>
    <div className='navbar'>
        <i className="fa-solid fa-film icon"></i>
        <Link to="/" className='links'>Movies</Link>
        <Link to="/watchlist" className='links'>Watchlist</Link>
    </div>
  )
}

export default Navbar