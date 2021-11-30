import React from "react";
import style from "./TodoListItem.module.css";

function TodoListItem(props) {
  return (
    <li className={style.ListItem}>
      {props.todo.fields.Title}
      <span className={style.Space}></span>
      <button
        className={style.Button}
        onClick={() => props.onRemoveTodo(props.todo.id)}
        type="button"
      >
        POW
      </button>
    </li>
  );
}

export default TodoListItem;
