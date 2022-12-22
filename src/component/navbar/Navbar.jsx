import React from "react";
import "./Navbar.css";
import logo from "../../assent/logo.webp";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>about</li>
        <li>portfolio</li>
        <li>pages</li>
        <li>blog</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
