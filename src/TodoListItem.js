import React from "react";

const TodoListItem = ({item, onRemoveTodo}) => (
  <li>
    <span>&nbsp;{item.fields.Title || item.fields.Task}</span>
    <button
      className='button'
      type='button'
      onClick={() => onRemoveTodo(item.id)}>
      Remove
    </button>
  </li>
);

export default TodoListItem;
