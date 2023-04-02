import React ,{useState,useRef}from 'react'

function Hoc2() {
    const [count,setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>{
        setCount(count+1)
      }}>Update</button>
    </div>
  )
}

export default Hoc2
