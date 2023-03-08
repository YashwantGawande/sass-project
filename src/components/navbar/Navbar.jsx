import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="" className="navbar__logo">
        SASS
      </a>
      <div className="navbar__bars">
        <DehazeIcon />
      </div>
      <div className="navbar__menu">
        <a href="" className="navbar__menu--links">
          Home
        </a>
        <a href="" className="navbar__menu--links">
          Products
        </a>
        <a href="" className="navbar__menu--links">
          Services
        </a>
        <a href="" className="navbar__menu--links" id="button">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
