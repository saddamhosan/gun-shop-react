import React from 'react';
import Product from '../product/Product';
import './Products.css';

const Products = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Total products:{products.length}</h1>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;