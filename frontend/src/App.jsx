import React from 'react';
import Navbar from './Homepage/Navbar';
import Maincontent from './Homepage/Maincontent';
import Footer from './Homepage/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
const App = () => {
  return (
    <>
      <Navbar />
      <Maincontent />
      <Footer />
    </>
  );
};

export default App;