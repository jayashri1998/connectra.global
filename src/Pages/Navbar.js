import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-black shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left side: Logo */}
        <h1 className="text-2xl  font-bold text-white">Connectra Technology</h1>

        {/* Center: Navigation links */}
        <ul className="flex space-x-6 font-medium text-white">
          <li><a href="#" className="hover:text-red-600">Home</a></li>
          <li><a href="#services" className="hover:text-red-600">Services</a></li>
          <li><a href="#products" className="hover:text-red-600">Products</a></li>
          <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
        </ul>
        <button className="ml-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all">
          Contact Us
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
