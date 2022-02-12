import React, { useState } from "react";
import "./Navbar.css";
import { BsMoon, BsSun } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../../store";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useState(true);
  const handleDarkMode = () => {
    setIsDark(!isDark);
    dispatch(setDarkMode(isDark));
  };

  console.log(isDark);
  return (
    <div className="navbar-container">
      <p>Where is in the world?</p>
      <span className="toggle-btn" onClick={handleDarkMode}>
        {isDark ? (
          <span>
            <BsMoon /> Dark Mode
          </span>
        ) : (
          <span>
            <BsSun /> Light Mode
          </span>
        )}
      </span>
    </div>
  );
};

export default Navbar;
