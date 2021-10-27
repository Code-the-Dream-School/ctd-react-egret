import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/List 1">List 1</NavLink>
        </li>
        <li>
          <NavLink to="/List 2">List 2</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
