import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  console.log(todo)
  return (
    <>
      <li>
        {todo.fields.Title}
        &nbsp;
        <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
      </li>
    </>
  );
};

export default TodoListItem;
