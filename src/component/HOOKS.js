import { useState } from "react";
export default function Usestate()
{
    var[name ,setname]=useState("guru")
    let[age,setage]=useState(18)
    return(
<div>
<hi>my name changed to {name}</hi>
<button onClick={()=>setname(("kavin"))}>change name</button>
<h1>my age is changed t0 {age}</h1>
<button onClick={()=>setage((age++))}>change age</button>
</div>

    )
}