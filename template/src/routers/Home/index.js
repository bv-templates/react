import React, { Component } from 'react'
import logo from '$images/logo.png'

export default class Home extends Component {
  render () {
    return (
      <>
        <h1>Hello BV!</h1>
        <img src={logo} width="120" height="50" />
      </>
    )
  }
}