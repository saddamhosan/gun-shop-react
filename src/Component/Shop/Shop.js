import React, { useEffect, useState } from 'react';
import { addToStorage, getToStorage } from '../../Storage';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
  const [cart,setCart]=useState([])
    const [products,setProducts]=useState([])
    let newCart=[]
    const addToCart=(product)=>{
      const exists=cart.find(pro=>pro.id === product.id)
      const rest=cart.filter(pro=>pro.id !== product.id)
      if(!exists){
        product.quantity=1
        newCart=[...cart,product]
        console.log(exists);
      }else{
        exists.quantity = exists.quantity + 1;
        newCart=[...rest,exists]
      }
       
      setCart(newCart)
      addToStorage(product)
    }
    useEffect(()=>{
      fetch("fake-data.json").then(res=>res.json())
      .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
      const getStorage = getToStorage();
      const buyItem=[]
      for (const id in getStorage){
        
         const item = products.find(product=>product.id === (+id))
         if(item){
           item.quantity=getStorage[id]
          //  console.log(item);
          buyItem.push(item)
         
         }
       }
       setCart(buyItem)
    },[products])

    return (
      <div className="shop">
        <div className="products-container">
          <Products products={products} addToCart={addToCart} />
        </div>
        <div className="cart-container">
          <Cart cart={cart}/>
        </div>
      </div>
    );
};

export default Shop;