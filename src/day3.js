import React from "react";
//import  useState  from "react-dom";
import './App.css';

function Category(props){
    return(
        <div>
            <p>{props.name} - Rs.{props.price}</p>
        </div>
    )
}

const tea=10;
const milk=60;
const coffee=20;
const custard=150;
const cake=70;
const pie=200;


function Webpage2(){
    const [count,setCount]=React.useState(0);
    const [price,setPrice]=React.useState(0);
   const Coffee=()=>{
     setCount(count+1);
     setPrice(price+coffee);
   }
   const milkshake=()=>{
    setCount(count+1)
    setPrice(price+milk)
  }
  const Tea=()=>{
    setCount(count+1)
    setPrice(price+tea)
  }
  const Apple=()=>{
    setCount(count+1)
    setPrice(price+pie)
  }
  const cakes=()=>{
    setCount(count+1)
    setPrice(price+cake)
  }
  const caramel=()=>{
    setCount(count+1)
    setPrice(price+custard)
  }
 

    return(
       
            <div>
            <h1 id="heading">FOOD</h1>
            <hr/>
            <div>
           
            <header>
            <a href="htt">Home</a>
            <a href="kjbjh">Menu</a>
            <a href="kijvu">About</a>
            <a href="bkjv">My Orders</a>
            </header>
            </div>
            <hr/>
            <div className="section">
                <div>
                <h3>Beverages</h3>
                <Category name = "Coffee" price = {coffee} />
                <button onClick={Coffee}>Add to cart</button>
                <Category name = "Tea" price = {tea} />
                <button onClick={Tea}>Add to cart</button>
                <Category name = "Milkshake" price = {milk} />
                <button onClick={milkshake}>Add to cart</button>
                </div>
                <div>
                <h3>Pastries</h3>
                <Category name = "Apple pie" price = {pie} />
                <button onClick={Apple}>Add to cart</button>
                <Category name = "Cake" price = {cake}/>
                <button onClick={cakes}>Add to cart</button>
                <Category name = "Caramel custard" price = {custard}/>
                <button onClick={caramel}>Add to cart</button>
                </div>
            </div>
            <div className="cart">
                
                <h4>Total = {count}</h4>
                <h4>Price={price}</h4>
            </div>
            </div>
        )
    
}
export default Webpage2;