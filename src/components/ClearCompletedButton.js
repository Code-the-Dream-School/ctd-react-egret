import React from "react";
import style from "./modules/ClearCompleted.module.css";

const ClearCompletedButton = ({ clearCompleted }) => {
  return (
    <button className={style.clearCompletedButton} onClick={clearCompleted}>
      Clear Completed
    </button>
  );
};

export default ClearCompletedButton;
