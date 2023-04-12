import React from "react";

const Child=({cartItems,setCartItems})=>{
    function removeitem(index){
        cartItems.splice(index,1)
        setCartItems([...cartItems]);
    }
    return <div className="child">
        <h2>Child Component</h2>
            {
                cartItems.map((item,index)=>{
                    return (<li key={index} className="cartItem">
                        {item.name} - ${item.price}
                        <button onClick={()=>{removeitem(index)}} id="remove">Remove</button>
                    </li>)
                }
                )
            }
    </div>
}

export default Child