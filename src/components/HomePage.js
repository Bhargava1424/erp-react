// src/components/HomePage.js
import './HomePage.css';
import React, { useState } from 'react';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="homepage">
      <nav className={isOpen ? 'navbar open' : 'navbar'}>
        <button onClick={toggleNavbar}>Toggle Navbar</button>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>

      <header>
        <div className="logo-container">
          <img src="/9logo.jpg" alt="College ERP Logo" />
          <h1>College ERP System</h1>
        </div>
      </header>

      {/* ... (rest of the component remains unchanged) */}
    </div>
  );
};

export default HomePage;
