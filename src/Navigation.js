import React from "react";
import { NavLink } from "react-router-dom";
import style from "./modules/Navigation.module.css";

function Navigation({ listOfTables }) {
  console.log(listOfTables)
  return (
    <nav className={style.navContainer}>
      <ul className={style.navListContainer}>
        {listOfTables.map((table) => (
          <li key={table.id}>
            <img src={table.imgSrc} alt="logo" width="100" height="100" />
            <NavLink to={`/${table.type}`}>{table.type}</NavLink>
            
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
