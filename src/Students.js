import React, { Component } from 'react'

export default class Students extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Hi, I am {this.props.name}</h2>
      </div>
    )
  }
}
