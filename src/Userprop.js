import React, {useState} from 'react';

function Userprop(props){

    return (
     <div>
         <h1>User Prop function</h1>
         <button onClick={props.data}>Submit</button>
     </div>
    )
}
export default Userprop;