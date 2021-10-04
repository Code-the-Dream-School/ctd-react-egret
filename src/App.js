import React from 'react';
import './style.css'


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

function App() {
  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>
        <List />
    </div>
  );
}

const List = () => (
  <ul>
  {todoList.map((item) => (
    <li key={item.id}>
      <span>{item.title}</span>
    </li>
  ))}
  </ul>
)

export default App;
