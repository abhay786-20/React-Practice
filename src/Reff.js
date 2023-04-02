/*import React, { Component ,createRef} from 'react'

export default class extends Component {
    constructor(){
        super();
        this.inputRef = createRef();

    }
    componentDidMount(){
        console.log(this.inputRef.current.value = "1000");
    }
  render() {
    return (
      <div>
        <h1>Ref in React</h1>
        <input type="text"ref = {this.inputRef} />
      </div>
    )
  }
}
*/

import React,{useRef} from 'react'
import ForwardReff from './ForwardReff';
function Reff() {
  let inputRef = useRef(null);
  function handle(){
    console.log("Heloo");
    inputRef.current.value = "Abhay Sharma";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  }
  return (
    <div>
       <h1>Ref in React </h1>
       <ForwardReff ref = {inputRef}/>
       
       <button onClick={handle}>Click Me</button>
    </div>
  )
}

export default Reff
