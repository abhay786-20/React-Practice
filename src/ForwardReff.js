import React,{forwardRef} from 'react'

function ForwardReff(props,ref) {
  return (
    <div>
    <h1>Forward Ref in React </h1>
  {  <input type="text" ref = {ref}/>  } 
    </div>
  )
}

export default forwardRef(ForwardReff); 
