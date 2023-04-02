import React,{useEffect,useState} from 'react'

function Useeffect() {
  const[data,setData] = useState(10);
  const[count,setCount] = useState(0);
 const gfg =  useEffect(()=>{
        console.log("Abhayd");
        
    },[data])  

  
    console.log(count);
  
 
 const useThis=  useEffect(function cnt(){
    <div>
      <h1>GFG</h1>
    </div>
  },[count])
 
  return (
   
    <div>
      <h1>Useeffect in React {count}</h1>
      <br />
      {useThis}
      <h1>UseCount data {data}</h1>
      <br /><br />
     
      <button onClick={()=>{
        setCount(count+1);
      }}>Increment</button>
      <button onClick={()=>{
        setData(1+data);
      }}>Increment</button>
       {console.log("Jispe")}
    </div>
  )
}

export default Useeffect
