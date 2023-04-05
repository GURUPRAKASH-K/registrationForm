import { useState } from "react";
export default function Ho()
{
    var[name,setname]=useState("")
    const[data,setdata]=useState(" ")
    const submitdate=(e)=>{
        e.preventDefault();
        setdata(()=>{console.log(name)})
    }
    return (
        <div>
        <form onSubmit={submitdate}>
        <label>name</label>
        <input type="text" value={name} onChange={e => setname(e.target.value)}></input>
        <button>Submit</button>
        </form>
        
        {data}
        
        </div>
    )
}