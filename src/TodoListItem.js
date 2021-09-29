import React from "react";

const TodoListItem = ({item, onRemoveTodo}) => (
  <li>
    <span>{item.title}</span>
    &nbsp;
    <button type='button' onClick={() => onRemoveTodo(item.id)}>
      Remove
    </button>
  </li>
);

export default TodoListItem;
