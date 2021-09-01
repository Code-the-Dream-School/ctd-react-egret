import React from 'react';
import TodoListItem from'./TodoListItem';

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
  
  const TodoList = (props) => {
      return (
        <ul>
            {todoList.map((todo) => (
              <TodoListItem key={todo.id} todo={todo}/>
            ))}
        </ul>
      )
  }

  export default TodoList