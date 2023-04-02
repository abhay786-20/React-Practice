 import React,{useState,useRef} from 'react'
import Hoc2 from './Hoc2'
 import Hoc3 from './Hoc3'
 function Hoc1() {
    
   return ( 
     <div>
       <h1>Hoc</h1>
       <Hoc3 cmp = {Hoc2} />

     </div>
   )
 }
 
 export default Hoc1
 