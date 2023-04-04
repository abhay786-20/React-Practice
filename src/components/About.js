import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
function About() {
  return (
    <div>
     
      <NavLink to = "/user/anil" className="navli">User</NavLink>
      <br />
      <NavLink to = "/user/abhay" className="navli">User</NavLink>
      <Outlet/>
    </div>
  )
}

export default About
