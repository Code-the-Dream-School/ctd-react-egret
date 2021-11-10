import React from "react";
import { NavLink } from "react-router-dom";
import style from "./modules/Navigation.module.css";

function Navigation({ categories, counts }) {
  console.log(categories)
  return (
    <nav className={style.navContainer}>
      <ul className={style.navListContainer}>
        {categories.map((table, index) => (
          <li key={index}>
            <img src={table.imgSrc} alt="logo" width="100" height="100" />
            <NavLink to={`/${table.category}`}>{table.category}</NavLink>
            <p style={{ color: 'red' }}>{counts[table.category]} todos</p>
            
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
