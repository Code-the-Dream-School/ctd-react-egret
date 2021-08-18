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

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function(item) {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
