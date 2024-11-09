import React, { useState } from 'react';

const FoodItemCard = ({ title, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-wrap justify-between gap-3 p-3">
      <div className="w-61 p-4 bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105">
        <img
          src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg"
          alt={title}
          className="w-full h-44 object-cover rounded-t-lg"
        />
        <div className="p-4 bg-white bg-opacity-10 rounded-b-lg">
          <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
          <p className="text-sm text-orange-100 mb-3">{description}</p>
          <p className="text-lg font-bold text-orange-200 mb-3">${price}</p>

          <div className="flex items-center gap-3 mb-3">
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="p-1 text-gray-700 border border-gray-300 rounded"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>

            <button className="px-3 py-2 bg-white text-orange-500 rounded hover:bg-orange-100 transition">
              Add to Cart
            </button>
          </div>

          <div>Total Price: ${(price * quantity).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;

