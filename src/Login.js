import React,{useState} from 'react'

function Login() {
    const[user,setUser] = useState("");
    const[pass,setPass] = useState("");
    const[err,setErr] = useState(false);

  function handle(e){
    
    e.preventDefault();
  }
  function handleUser(e){
    let item = e.target.value;
    console.log(item.length);
   if(item.length<3){
    setErr(true);
    console.log("if");
   }else{
    setErr(false);
    console.log("else");
   }

   
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" method="post" onSubmit={handle}>
        <input type="text" name="" id="" placeholder='Enter Name' onChange={handleUser}/>{err ?<span>Enter Valid Name</span>: ""}
        <br />
        <br /><br />
        <input type="password" name="" id="" placeholder='Enter Password' />
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
