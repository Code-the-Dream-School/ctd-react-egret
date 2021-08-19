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

function App() {
  return (
    <div>
      <h1>TODO list</h1>
      <ul>
        {todoList.map(function(item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
