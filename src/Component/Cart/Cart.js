import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
   let quantity=0
    let price=0;
    
        cart.map(product=>{
          // console.log(product.quantity);
          quantity +=product.quantity
           price +=(product.price)*product.quantity
        })
    
    const tax=price*0.2
    const grandTotal=price+tax
    return (
      <div className='cart'>
        <h1>ordered item:{quantity}</h1>
        <h4>total price: ${price}</h4>
        <h5>Tax:${tax}</h5>
        <h3>grand Total: ${grandTotal}</h3>
        
      </div>
    );
};

export default Cart;