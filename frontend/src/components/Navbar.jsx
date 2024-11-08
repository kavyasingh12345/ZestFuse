// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-orange-500 text-white py-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <span className="text-black">Zest</span>
          <span className="text-gray-300">Fuse.</span>
        </div>
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-black hover:text-orange-600 ${isActive ? "text-orange-700" : ""}`
            }
          >
            Home
          </NavLink>
          
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `text-black hover:text-orange-600 ${isActive ? "text-orange-700" : ""}`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-black hover:text-orange-600 ${isActive ? "text-orange-700" : ""}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-black hover:text-orange-600 ${isActive ? "text-orange-700" : ""}`
            }
          >
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

