import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: "Create new React project"
  },
  {
    id: 2,
    title: "Replace the new auto-generated README"
  },
  {
    id: 3,
    title: "Install project dependencies"
  },
  {
    id: 4,
    title: "Run the application"
  },
  {
    id: 5,
    title: "Create Todo list"
  }
];

function TodoList() {
  return (
    <ul>
        {todoList.map(function(item) {
          return (
            <TodoListItem key={item.id} todo={item.title}/>
          );
        })}
    </ul>
  );
}

export default TodoList;



