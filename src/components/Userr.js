import React from 'react'
import { useParams } from 'react-router'

function Userr() {
    const par = useParams();
    console.log(par);
    const name = par.name;
  return (
    <div>
      <h1>Hi, I am {name}</h1>
    </div>
  )
}

export default Userr
