import React, { Component } from 'react'

export default class Mount extends Component {
    constructor(props)
    {
        super(props)
        this.state={myName:"guru"}
    }
    // static getDerivedStateFromProps(props,state)
    // {
    //     return({myName:props.newName})
    // }
    shouldComponentUpdate()
    {
        return false
    }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({myName:"prakash"})},2000)
    }
  
  render() {
    return (
      <div>
      <p>{this.state.myName}</p>
      </div>
    )
  }
}

