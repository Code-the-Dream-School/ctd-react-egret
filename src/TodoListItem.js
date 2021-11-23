import React from "react";
import style from "./modules/TodoListItem.module.css"

const TodoListItem = ({ todo, onRemoveTodo }) => {
  
  return (
    <>
      <li className={style.listItem}>
        <input type="checkbox"/>
        <p>{todo.fields.Title}</p>
        
        <button onClick={() => onRemoveTodo(todo.id)}>
          ✖
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
