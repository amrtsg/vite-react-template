// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '@/css/Navbar.css'; // Import a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
