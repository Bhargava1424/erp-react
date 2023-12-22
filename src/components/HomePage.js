// src/components/HomePage.js
import './HomePage.css';
import Navbar from './Navbar'; 
import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <header>
        <div className="logo-container">
          <img src="/9logo.jpg" alt="College ERP Logo" />
          <h1>9 ERP System</h1>
        </div>
        <button
          className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        >
          Button
        </button>
      </header>

      {/* ... (rest of the component remains unchanged) */}
    </div>
  );
};

export default HomePage;
