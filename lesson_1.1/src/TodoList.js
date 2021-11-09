import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {

  return (
    <div>
      <ul>
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
