import React from 'react'

export default function Web() {
    const handleInput=()=>{
    
        alert("THANK FOR SUGGESTION");
    }
  return (
    <div>
    <h1 id='word'>Welcome to my store. I hope all things you need are present here. If you need to any new things send me the name of the things in form given below </h1>
    <br></br>
    <h1><b>Things present here are: </b></h1><br></br>
    <ul><a href='https://en.wikipedia.org/wiki/Fruit'>Fruits</a></ul>
    <ul><a href='https://en.wikipedia.org/wiki/Vegetable'>Vegetables</a></ul>
    <ul><a href='https://en.wikipedia.org/wiki/Toy'>Toys</a></ul>
    <label>enter your suggestion: </label>
    <input type='text' name="fname" ></input><br></br><br></br>
    <button type='button'  onClick={handleInput}>submit</button>

    <br></br>
    <h1>contact us through: </h1>
    <a href='https://instagram.com/06_dancing_rose?igshid=YmMyMTA2M2Y='><img id='in' src='https://cdn-icons-png.flaticon.com/512/174/174855.png'></img></a>


    </div>
  )
}
