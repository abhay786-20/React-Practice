import React, { useState } from "react";

function Api() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handle(){
      let data = {name,email,pass};
      console.log(data)
      fetch("http://localhost:3000/", {
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)

      }).then((res)=>{
        console.log(res);
      })
  }
  return (
    <div>
      <h1>Api Call</h1>
      <form action="" method="post">
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="username" />
        <br />
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" />
        <br />
        <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="password" />
        <br />
        <button type="button" onClick={handle}>Save new User</button>
      </form>
    </div>
  );
}

export default Api;
