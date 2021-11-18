import React from "react";
import TodoListItem from "./TodoListItem";
import style from "./modules/TodoList.module.css"

function TodoList({ todoList, onRemoveTodo, onEditTodo, changeTodoStatus }) {
  return (
    <ul className={style.ulContainer}>
      {todoList.map((todo) => (
        <TodoListItem 
          key={todo.id} 
          todo={todo} 
          onRemoveTodo={onRemoveTodo}
          onEditTodo={onEditTodo} 
          changeTodoStatus={changeTodoStatus}/>
      ))}
    </ul>
  );
}

export default TodoList;
