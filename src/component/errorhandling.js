import React, { Component} from "react";
export default class Error extends  Component
{
  constructor(props){
    super(props)
    this.state={count:0}
  }
  change()
  {
    this.setState(({count})=>({count:count+1}))
  }
  render()
  {
    if(this.state.count === 4)
    {
        throw new Error("Max count reached")
    }
    return(
        <div>
        <p>count:{this.state.count}</p>
        <button type="button" onClick={this.change.bind(this)}>click</button>
        </div>
    )
  }
}
