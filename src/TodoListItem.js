import React from "react";
import style from "./modules/TodoListItem.module.css"

//Function to get a current time
function getTime(date) {
  
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
   /*  hour: "2-digit",
    minute: "2-digit", */
  };
  //to get rid of ',' use split and join methods
  return date.toLocaleString(undefined, options).split(",").join(" ");
}

const TodoListItem = ({ todo, onRemoveTodo, changeTodoStatus }) => {
    console.log(todo.fields.isCompleted)
    console.log('item renders')
    

  return (
    <>
      <li className={style.listItem}>
        <input type="checkbox" onClick={(e) => changeTodoStatus(todo.id)}/>
        <p style={{ textDecoration: todo.fields.isCompleted === 'true' ? "line-through" : "",
                    color: todo.fields.isCompleted === 'true' ? "gray" : "initial" }}
        >
          {todo.fields.Title}
        </p>
        {/* <p>{todo.fields.CreatedTime }</p> */}
        <button onClick={() => onRemoveTodo(todo.id)}>
          ✖
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
