import React from 'react';

function TodoListItem(props) {
  const { todo } = props;

  return (
    <li>{todo}</li>
  );
}

export default TodoListItem;