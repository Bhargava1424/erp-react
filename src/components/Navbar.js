// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? "navbar open" : "navbar"}>
      <button onClick={toggleNavbar}>Toggle Navbar</button>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </nav>
  );
}

export default Navbar;
