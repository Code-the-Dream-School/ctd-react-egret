import React from 'react';
import TodoListItem from './TodoListItem.js';

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
        {todoList.map(function(todo) {
          return <TodoListItem key={todo.id} todo={todo} />;
        })}
    </ul>
);

export default TodoList;
