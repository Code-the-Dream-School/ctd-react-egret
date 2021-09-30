import React from "react";

function TodoListItem(props) {
 
  return (
    <li>
      {props.todo.title}
      <button onClick={()=> props.onRemoveTodo(props.todo.id)} type="button">Remove</button>
    </li>
  );
}

export default TodoListItem;
