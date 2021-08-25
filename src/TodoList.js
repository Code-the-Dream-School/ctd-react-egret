import React from 'react';

let todoList = [
    {
      id: 1,
      title: 'Complete assignment'
    },
    {
      id: 2,
      title: 'Read the book'
    },
    {
      id: 3,
      title: 'Ask questions'
    }
  ]

function TodoList() {
    return (
        <ul>
            {todoList.map(function(item) {
              return <li key={item.id}>{item.title}</li>
             })}
        </ul>
    );
}

export default TodoList;