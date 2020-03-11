import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav container">
      <nav className="ui menu">
        <div data-inverted="" data-tooltip="Home" data-position="bottom left">
          <NavLink to="/" className="item">
            MadLibs
          </NavLink>
        </div>

        <div
          data-inverted=""
          data-tooltip="Create a new madlib"
          data-position="bottom left"
        >
          <NavLink to="/new" className="item">
            New
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
