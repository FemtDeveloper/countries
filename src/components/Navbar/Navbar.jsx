import React from "react";
import "./Navbar.css";
import { BsMoon } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <p>Where is in the world?</p>
      <button type="button">
        <BsMoon /> Dark Mode
      </button>
    </div>
  );
};

export default Navbar;
