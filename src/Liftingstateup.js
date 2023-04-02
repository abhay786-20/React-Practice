import React from 'react'

function Liftingstateup(props) {
    let data = "Abhay"
    function parent(d){
      alert("Hello"+ d);
    }
  return (
    
    <div>
   {/* <h1>Lifting State Up {props.name}</h1>*/}
    <button onClick={()=>props.name(data)}>Click me</button>
      
    </div>
  )
}

export default Liftingstateup
