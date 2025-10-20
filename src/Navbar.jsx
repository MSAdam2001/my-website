import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo"></h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">About</Link></li> {/* Opens blog page */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
