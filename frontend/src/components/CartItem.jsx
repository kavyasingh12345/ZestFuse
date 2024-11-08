// src/components/CartItem.js
import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
