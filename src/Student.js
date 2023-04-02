import React from 'react'

function Student(props) {
    console.log(props);
  return (
    <div>
      <h1>Hi, I am {props.name} and my email is {props.email}</h1>
    </div>
  )
}

export default Student
