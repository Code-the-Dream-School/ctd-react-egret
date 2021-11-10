import React from "react";
import TodoListItem from "./TodoListItem";
import style from "./modules/TodoList.module.css"

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul className={style.ulContainer}>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
