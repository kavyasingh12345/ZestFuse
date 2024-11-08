import React, { useState } from 'react';
import './FoodItemCard.css'; // Custom CSS file for styling

const FoodItemCard = ({ title, description, price, imageUrl }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card-container">
      <img src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>

        <div className="card-actions">
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="quantity-dropdown"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
        <div>
        Total Price
      </div>
      </div>
      
    </div>
  );
};

export default FoodItemCard;
