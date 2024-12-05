import React from 'react';
import '../assets/styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/newsletter">Newsletter</a></li>
    </ul>
  </nav>
);

export default Navbar;
