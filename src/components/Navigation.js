import React from "react";
import { NavLink } from "react-router-dom";
import style from "./modules/Navigation.module.css";
import PropTypes from "prop-types";


const Navigation = React.memo(({ categories, counts }) => {

  return (
    <>
      <nav className={style.navContainer}>
        
        <ul className={style.navListContainer}>
          {categories.map((table, index) => (
            <li key={index}>
              <NavLink to={`/${table.category}`}>
                <img src={table.imgSrc} alt="logo" width="50" height="50" />
                {table.category}
                <p style={{ color: "#cd3b3b", fontSize: "small" }}>
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
});

Navigation.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  counts: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Navigation;
