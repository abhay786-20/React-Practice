import React, {useRef} from 'react'

function Uncontrolled() {
 let inputRef1 = useRef(null);
 let inputRef2 = useRef(null);
 
 function submitForm(e){
    e.preventDefault();
   let cd = document.getElementById("ab");
    console.log(cd);
    console.log(inputRef1.current.value+ " "+ inputRef2.current.value);
   

 }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form action="" onSubmit={submitForm} >
        <input ref = {inputRef1} type="text" name="" id="" />
        <br /><br />
        <input ref = {inputRef2} type="text" name="" id="" />
        <br /><br />
        <input id = "ab" type="text" name=""  />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Uncontrolled
