//Menu.jsx

import React from 'react';

// Sample menu data with image URLs; replace with actual data or API calls if needed
const menuItems = [
  {
    category: 'Starters',
    items: [
      { 
        name: 'Garlic Bread', 
        description: 'Freshly baked with garlic and herbs', 
        price: '$5.00', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwk5sYQkjkVGdWx5blo1_6F0IPE3I2MdQYgQ&s' 
      },
      { 
        name: 'Bruschetta', 
        description: 'Grilled bread with tomato and basil', 
        price: '$7.00', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqtAduur14-N3CEzd3u0Z1ceKL1ByDSE3sw&s' 
      },
    ],
  },
  {
    category: 'Main Course',
    items: [
      { 
        name: 'Margherita Pizza', 
        description: 'Classic cheese pizza with fresh basil', 
        price: '$12.00', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUM1pySKC2L6di9Yx6dP4k4ftwXkdCSPKllA&s' 
      },
      { 
        name: 'Spaghetti Carbonara', 
        description: 'Creamy pasta with pancetta', 
        price: '$14.00', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1jQhwmFWRLEctjiKF4Q7E_I4zz0xXLmvxg&s' 
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      { 
        name: 'Tiramisu', 
        description: 'Classic Italian dessert with mascarpone', 
        price: '$8.00', 
        image: 'https://t3.ftcdn.net/jpg/03/28/01/60/360_F_328016056_Ro67OjyMT2dnGFL6v4VKKoAkIcakElTW.jpg' 
      },
      { 
        name: 'Chocolate Fondant', 
        description: 'Warm cake with a molten center', 
        price: '$9.00', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPl1m_HOY_yDnssXij3vK2tIOFSRasI4CbA&s' 
      },
    ],
  },
  // Add more categories and items as needed
];

const Menu = () => {
  return (
    <div className="max-w-full mx-auto p-6 text-center bg-gradient-to-b from-orange-200 to-orange-400">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">ZestFuse Menu</h1>
      {menuItems.map((section, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{section.category}</h2>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx} className="flex items-center py-4 border-b border-gray-200">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <span className="text-lg font-semibold text-gray-700">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
