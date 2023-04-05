import React from 'react'

export default class Parent extends React.Component
{
  render()
  {
    return(
      <div>
      <h1>hi i am </h1>
      <Child/>
      </div>
    )
  }
}
class Child extends React.Component
{
  render()
  {
    return(
      <div>
      <h1>guru</h1>
      </div>
    )
  }
}
