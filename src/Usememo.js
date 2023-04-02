import React ,{useState,useMemo}from 'react'

function Usememo() {
    const[count,setCount] = useState(0);
    const[item,setItem] = useState(10);

const multiCMemo = useMemo(function multi(){
        return <div>
            <h1>Hello {item}</h1>
        </div>
    },[count])
  return (
    <div>
       <h1>Usememo Hook {count}</h1>
       <h1>Usememo Hook { item }</h1>
       <h1>{multiCMemo}</h1>
       <button onClick={()=>setCount(1+count)}>Update Count</button>
       <button onClick={()=>setItem(10*item)}>Update Item</button>
    </div>
  )
}

export default Usememo
