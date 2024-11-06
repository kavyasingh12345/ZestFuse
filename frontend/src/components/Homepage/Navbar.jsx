import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="bg-orange-500 text-white py-8">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="text-2xl font-bold">
              <span className="text-black">Zest</span>
              <span className="text-gray-300">Fuse.</span>
            </div>
            <nav className="space-x-6">
              <a className="text-black hover:text-orange-600" href="#">Home</a>
              <a className="text-black hover:text-orange-600" href="#">About</a>
              <a className="text-black hover:text-orange-600" href="#">Menu</a>
              <a className="text-black hover:text-orange-600" href="#">Contact</a>
              <a className="text-black hover:text-orange-600" href="#">Login</a>
            </nav>
          </div>
        </header>
      </div>
    );
};

export default Navbar
