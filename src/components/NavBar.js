import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='gfg'>
    <ul className='nav'>
     <li> <NavLink to = "/" className="navli">Home</NavLink></li>
     
     <li> <NavLink to = "/about" className="navli">About</NavLink></li>

     <li> <NavLink to = "/filter" className="navli">Filter</NavLink></li>
     
     <li> <NavLink to = "/login" className="navli">Login</NavLink></li>
     
      </ul>
    </div>
  )
}

export default NavBar
