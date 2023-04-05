import React from 'react'

export default function Day5() {
    var fruits=["jack","orange","grapes","watermelon"]
    var displayfruits=fruits.map(fname=>{return <li>{fname}</li>})/*outside the function */
    const stuinfo=[{id:1,name:"Guru"},{id:2,name:"Bala"},{id:3,name:"kavin"},{id:4,name:"kabils"},{id:5,name:"Murali"}]
  return (
    <div>{displayfruits}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}   {sinfo.name}</li>})}
    </div>
  )
}