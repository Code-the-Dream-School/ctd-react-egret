import React from 'react';

let todoList = [
  {
    id: 1,
    title: "Fork the assignment"
  },
  {
    id: 2,
    title: "Complete the assignment"
  },
  {
    id: 3,
    title: "Submit the assignment"
  }
]
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
          {todoList.map(function(i) {
            return (
              <li key = {i.id}>
                {i.title}
              </li>
            )
          })}
      </ul>
    </div>
  );
}

export default App;
