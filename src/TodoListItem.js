import React from "react";
import style from "./modules/TodoListItem.module.css";


const TodoListItem = ({ todo, onRemoveTodo, onEditTodo, changeTodoStatus }) => {
  const handleClick = (e) => {
    if (e.target.innerText === "Edit") {
      e.target.parentNode.querySelector("p").contentEditable = true;
      e.target.parentNode.querySelector("p").style.backgroundColor = "white";
      e.target.innerText = "Save";
      
    } else {
      e.target.parentNode.querySelector("p").contentEditable = false;
      e.target.parentNode.querySelector("p").style.backgroundColor = "initial";
      e.target.innerText = "Edit";
      const editedValue = e.target.parentNode.querySelector("p").innerText;
      onEditTodo(todo.id, editedValue);
    }
  };
  const checked = todo.fields.isCompleted === "true";

  return (
    <>
      <li className={style.listItem}>
        <input
          type="checkbox"
          defaultChecked={checked}
          onClick={(e) => changeTodoStatus(todo.id)}
        />
        <p
          style={{
            textDecoration:
              todo.fields.isCompleted === "true" ? "line-through" : "",
            color: todo.fields.isCompleted === "true" ? "gray" : "initial",
          }}
        >
          {todo.fields.Title}
        </p>
        
        <button onClick={() => onRemoveTodo(todo.id, todo.fields.isCompleted)}>✖</button>
        <button onClick={handleClick}>Edit</button>
      </li>
    </>
  );
};

export default TodoListItem;
