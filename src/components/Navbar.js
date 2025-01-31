import React from 'react';
import '../assets/styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/ideas">Ideas</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
