import React from 'react';

let todoList=[
    {
      id: 1,
      title: "Go shopping",
    }, 
    {
      id: 2,
      title: "Relax",
    },
    {
      id: 3,
      title: "Cook dinner",
    }
  ];

//arrow function declaration
const TodoList = () => (
    <ul>
        {todoList.map(function(item) {
          return <li key={item.id}>{item.title}</li>;
        })}
    </ul>
);

export default TodoList;
