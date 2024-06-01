import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header py-4">
      <div className="container flexBetween">
        <h1 className="logo text-white text-2xl font-bold">Innovatech VR Pro</h1>
        <nav>
          <ul className="nav-links flex space-x-4">
            <li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
            <li><Link to="/product" className="text-white hover:text-gray-400">Product</Link></li>
            <li><Link to="/order" className="text-white hover:text-gray-400">Order</Link></li>
            <li><Link to="/news" className="text-white hover:text-gray-400">News</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
