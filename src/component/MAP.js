import React, { Component } from 'react'
class P extends Component{
    render()
    {
        return
        {
            <div>
            <p>{this.props.name}</p>
            </div>
        }
    }
}
export default class MAP extends Component {
  render() {
    var name=["suma","duma"]
    return (
      <div>
      {name.map((n)=><P name={n}/>)}
     </div>
    )
  }


}
