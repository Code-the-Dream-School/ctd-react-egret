import React from "react";

function TodoListItem({ todo, onRemoveTodo }) {
  console.log({ todo });
  return (
    <div>
      <li key={todo.id}>
        {todo.title}
        <button onClick={() => onRemoveTodo(todo.id)} type="button">
          Remove
        </button>{" "}
      </li>
    </div>
  );
}

export default TodoListItem;
