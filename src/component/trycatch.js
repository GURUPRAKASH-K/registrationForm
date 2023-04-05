import React from 'react'

export default function Trycatch(props) {
try{
    if(props.num===0)
    {
        throw new Error("cannot divided by zero")
    }
}
catch(error)
{
    console.log(error)
    document.write("we cannot divide the number by zero")
}
finally
{   document.write("<br></br>")
    document.write("i am guru")
}
return(
    <div>
    <p>{props.num}</p>
    </div>
)

}
