import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <>
      <li>
        {todo.title}
        &nbsp;
        <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
      </li>
    </>
  );
};

export default TodoListItem;
