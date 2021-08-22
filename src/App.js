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

function App() {
  return (
    <div style={{textAlign: 'left'}}>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function(item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
