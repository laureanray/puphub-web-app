import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation__main">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/test"> Test </NavLink>
      </div>
    );
  }
}

export default Navigation;
