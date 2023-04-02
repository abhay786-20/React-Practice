import React from 'react';
import User from './User';

function Reusee(){
    const stadd = [ {name : "Abhay", mob : 6394263206},{name : "Sanket", mob : 9554147070},
                    {name : "Harsh", mob : 9648048578},{name : "Aditya", mob : 6394260871},]
  
    return (
        <div>
              <h1>Reuse Component</h1>
              
              {
                  stadd.map((item,key)=>
                 <User data = {item.name}/>
                )
              }

        </div>
    )
}
export default Reusee;