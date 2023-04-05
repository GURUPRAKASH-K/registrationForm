import React from "react";

const callalert = () =>{
    alert('Message from Javascript alert!');
}

const callog = () => {
    console.log('Message to developer');
}

const myArray = ['a', 'e', 'i', 'o']

const show = () => {
    alert('check the console output!');
    myArray.push('u');
    console.log(myArray);
}

export default function Begin()
{
    return(
        <div id="J">
        
            <br /> <br />
            <button onClick={callalert}>TO SEE THE alert</button>   
            <br /> <br />
            <button onClick={callog}>TO SEE IN CONSOLE.LOG</button>
            <br /> <br />
            <button onClick={show}>click to push</button>
            <br /> <br />
        </div>
    )
}