import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'

function Login() {
    const navi =useNavigate() 
    const login = ()=>{
       localStorage.setItem('login',true)
       navi('/')
    }
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(login){
          navi('/')
        }
    })
  return (
    <div>
      <h1>
        Login Page
      </h1>
      <input type="text" name="" id="" />
      <br />
      <input type="text" name="" id="" />
      <br />
      <button onClick={login}></button>
    </div>
  )
}

export default Login
