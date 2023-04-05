import React from 'react'

export default class Parent extends React.Component {
  render() {
    return (
      <div>
      <p>I am a Parent</p>
      <Child/>
      </div>
    )
  }
}
class Child extends React.Component{
    render()
    {
        return(
            <div>
            <h1>Kavin</h1>
            </div>
        )
    }
}
