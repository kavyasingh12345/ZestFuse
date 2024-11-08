import React, { useState } from 'react';
import Navbar from './components/Homepage/Navbar';
import Maincontent from './components/Homepage/Maincontent';
import Footer from './components/Homepage/Footer';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Homepage/Menu';
import LoginForm from './pages/Login';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Maincontent />} /> {/* Home Route */}
        <Route path="/menu" element={<Menu />} />    {/* Menu Route */}
        <Route path="/cart" element={<Cart />} />    {/* Cart Route */}
        <Route path="/login" element={<LoginForm />} />    {/* Cart Route */}
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
