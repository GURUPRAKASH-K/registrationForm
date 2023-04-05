import React, { Component } from 'react'

export default class State extends Component {
    state={name:"guru",age:"19"}
    Kavin=()=>{this.setState({name:"Kavin",age:"20"})}
  render() {
    
    return (
      <div>
      <h1>{this.state.name}</h1>
      <h2>{this.state.age}</h2>
      <button type='button' onClick={this.Kavin} >click</button>
      </div>
    )
  }
}


