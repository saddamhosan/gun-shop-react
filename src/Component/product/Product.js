import React from 'react';
import './Product.css';
const Product = (props) => {
    const { img, name, price } = props.product;
    // console.log(props.product);
    return (
      <div className="product">
       
          <img src={img} alt="" />
          <div className="product-info">
            <h3>{name}</h3>
            <h4>price:${price}</h4>
          </div>
          <button onClick={() =>props.addToCart(props.product)} className="cart-btn">
            Add to cart
          </button>
        </div>
      
    );
};

export default Product;