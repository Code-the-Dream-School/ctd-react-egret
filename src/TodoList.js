import React from 'react';

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
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
  );
}

export default TodoList;



