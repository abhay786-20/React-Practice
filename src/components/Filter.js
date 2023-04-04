import React from 'react'
import { useSearchParams } from 'react-router-dom';


function Filter() {
    const [sea,setSea] =useSearchParams();
console.log(sea.get('age') )
  return (
    <div>
      <h1>Filter {sea.get("age")}</h1>
      <button onClick={()=>setSea({age:50})}>submit</button>
    </div>
  )
}

export default Filter
