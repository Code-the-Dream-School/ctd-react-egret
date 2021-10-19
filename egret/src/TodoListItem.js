import React from "react";

let TodoListItem = ({todo,onRemoveTodo}) => {
  return (
    <li>
      <span>{todo.id}</span>
      <span>{todo.title}</span>
      <button type="button" onClick={() => onRemoveTodo (todo.id)}>Remove</button>
    </li>
  );
};

export default TodoListItem;