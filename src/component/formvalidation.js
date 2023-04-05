import React, { useState } from 'react'

export default function Fo() 
{
    const[firstName,setfirstName]=useState("")
    const[lastName,setlastName]=useState("")
    const[error,seterror]=useState(false)

    const handleError=(e)=>{
        e.preventDefault();
        if(firstName.length ===0 || lastName.length ===0 )
        {
            seterror(true)
        }
        if(firstName && lastName)
        {
            console.log(" First Name => " +firstName)
            console.log("Last Name => "+lastName)
        }
    }
  return (
    <div>
        <form onSubmit={handleError}> 
        Enter the First Name : <input type='text' onChange={(e)=>setfirstName(e.target.value)}/>
        <br></br><br></br>
        {error && firstName.length ===0 ? <label>Please Enter The First Name</label>: ""}
        Enter the Last Name : <input type='text' onChange={(e)=>setlastName(e.target.value)}/>
        <br></br><br></br>
        {error && lastName.length ===0 ? <label>Please Enter The Last Name</label>: ""}
        <button type='submit' >Submit</button>
        </form>
    </div>
  )
}