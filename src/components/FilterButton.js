import React, {memo} from 'react';
import style from './modules/FilterButton.module.css'
import PropTypes from "prop-types"

const FilterButton = memo(({ name, isPressed, setFilter }) => {
  return (
    <button
      type="button"
      className={style.btn}
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span className="visually-hidden"> Show </span>
      <span>{ name }</span>
      <span className="visually-hidden"> tasks </span>
    </button>
  );
});

FilterButton.propTypes = {
  name: PropTypes.string,
  isPressed: PropTypes.bool,
  setFilter: PropTypes.func,
}

export default FilterButton;
