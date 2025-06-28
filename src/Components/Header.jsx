//import React from 'react';
import { Link } from 'react-router-dom';

function Header({ title }) {
  return (
    <header>
      <img src="/pics/header.jpg" alt="Floral Elegance Logo" className="logo" />
      <h1>{title}</h1>
      <p><i>Where Beauty Blossoms in Pakistan</i></p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/register">Register</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
    </header>
  );
}
