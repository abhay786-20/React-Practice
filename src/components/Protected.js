import React from 'react'
import { useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom'

function Protected(props) {
    const {Component} = props
    const navi = useNavigate()
   
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
          navi('/login')
        }
    })

  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected
