import React from 'react'
import { NavLink, useNavigate,useLocation } from 'react-router-dom'
function Home() {
  const navi = useNavigate(); 
  const navtopage = (e)=>{
     navi(e);
  }
  function jp(e){
     alert(e);
  }
  const loc = useLocation();
  console.log(loc);
  return (
    <div>
      <h1>home</h1>
      <NavLink to ="/about">About</NavLink>
      <br />
      <button onClick={()=>navtopage("/about")}>Go to About Page</button>
      <br />
      <button onClick={()=>navtopage("/filter")}>Go to Filter Page</button>
      <br />
      <button onClick={()=>jp("Sanket")}>Go to Filter Page</button>
    </div>
  )
}

export default Home
