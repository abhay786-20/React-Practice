import React from 'react'

function User(props) {
  return (
    <div>
        <h2 style={{color : 'red'}}>I am {props.data}</h2>
    </div>
  )
}

export default User
