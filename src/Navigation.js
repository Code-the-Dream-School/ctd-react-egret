import React from "react";
import { NavLink } from "react-router-dom";
import style from "./modules/Navigation.module.css";

function Navigation({ categories, counts }) {
  
  return (
    <nav className={style.navContainer}>
      <ul className={style.navListContainer}>
        {categories.map((table, index) => (
          <li key={index}>
            <img src={table.imgSrc} alt="logo" width="100" height="100" />
            <NavLink to={`/${table.category}`}>{table.category}</NavLink>
            <p style={{ color: 'red', fontSize: 'small' }}>
             {counts[table.category] > 1 ? `${counts[table.category]} active tasks` : `${counts[table.category]} active task`}
            </p>
            
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
