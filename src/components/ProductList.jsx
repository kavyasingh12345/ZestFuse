// src/components/ProductList.js
import React from 'react';
import { useCart } from '../context/CartContext';

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;