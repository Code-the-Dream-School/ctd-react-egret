import React from 'react';

function TodoListItem(props) {
  const { todo } = props;

  return (
    <li>
      {todo}
      <button onClick={()=>{props.onRemoveTodo(props.id)}}>Remove</button>
    </li>
  );
}

export default TodoListItem;