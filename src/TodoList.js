import React from 'react';

const todoList = [
    {
      'id': 1,
      'title': 'Complete the coding challenge on uidaily.com'
    },
    {
      'id': 2,
      'title': 'Search for a remote job'
    },
    {
      'id': 3,
      'title': 'Ask for help moving furniture next month'
    },
  ]
  
  const TodoList = () => {
      return (
        <ul>
            {todoList.map((item) => (
            <li key={item.id}>
                <span>{item.title}</span>
            </li>
            ))}
        </ul>
      )
  }

  export default TodoList