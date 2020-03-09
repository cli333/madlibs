import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="ui labeled icon menu fixed">
      <NavLink to="/" className="item">
        <i className="gamepad icon"></i>
        MadLibs
      </NavLink>

      <NavLink to="/new" className="item">
        <i className="pencil alternate icon"></i>
        New
      </NavLink>
    </nav>
  );
};

export default Nav;
