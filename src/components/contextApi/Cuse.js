import React from 'react'
import { Common } from './Common'

function Cuse() {
  return (
  
   <Common.Consumer >
    {    
        ({handle,data})=>(
           <div>
            <button onClick={handle}>Clickme</button>
            <h1>{data}</h1>
            </div>
        )
        
           
    }
   </Common.Consumer>
  
  )
}

export default Cuse
