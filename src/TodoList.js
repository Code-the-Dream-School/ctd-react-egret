import React from 'react';
import TodoListItem from'./TodoListItem';

const todoList = [
    {
      'id': 1,
      'title': 'React'
    },
    {
      'id': 2,
      'title': 'Html'
    },
    {
      'id': 3,
      'title': 'Css'
    },
  ]
  
  const TodoList = (props) => {
      return (
        <ul>
            {todoList.map((todo) => (
              <TodoListItem todo={todo.id} todo={todo}/>
            ))}
        </ul>
      )
  }

  export default TodoList