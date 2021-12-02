import React from "react";
import TodoListItem from "./TodoListItem";
import style from './TodoListItem.module.css'


function TodoList({ todoList, onRemoveTodo }) {

  return (
    <div>
      <ul className={style.unorderedTodoList}>
        {todoList.map( function(todo) {
          return (
          <TodoListItem
              key={todo.id}
              todo={todo}
              onRemoveTodo={onRemoveTodo}
               />
          )
        })}
      </ul>
      </div>
  );
}
export default TodoList;
