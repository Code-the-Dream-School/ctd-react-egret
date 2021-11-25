import React from "react";
import { NavLink } from "react-router-dom";
import style from "./modules/Navigation.module.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";

function Navigation({ categories, counts }) {
  const [isDark, setIsDark] = React.useState(true);
  return (
    <>
      <nav className={style.navContainer}>
        <Toggle
          className="dark-mode-toggle"
          checked={isDark}
          onChange={({ target }) => setIsDark(target.checked)}
          aria-label="Dark mode toggle"
        />
        <ul className={style.navListContainer}>
          {categories.map((table, index) => (
            <li key={index}>
              <NavLink to={`/${table.category}`}>
                <img src={table.imgSrc} alt="logo" width="100" height="100" />
                {table.category}
                <p style={{ color: "red", fontSize: "small" }}>
                  {counts[table.category] > 1
                    ? `${counts[table.category]} active tasks`
                    : `${counts[table.category]} active task`}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
