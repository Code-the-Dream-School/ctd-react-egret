import React from "react";

let TodoListItem = (props) => {
  return (
    <li>
      <span>{props.todo.id}</span>
      <span>{props.todo.title}</span>
    </li>
  );
};

export default TodoListItem;
