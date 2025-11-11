import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="logo-link">Sensational Goodies</NavLink>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
        <li><NavLink to="/pages/Cakes" className={getLinkClass}>Cakes</NavLink></li>
        <li><NavLink to="/pages/Events" className={getLinkClass}>Events</NavLink></li>
        <li><NavLink to="/pages/About" className={getLinkClass}>About</NavLink></li>
        <li><NavLink to="/pages/Contact" className={getLinkClass}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
