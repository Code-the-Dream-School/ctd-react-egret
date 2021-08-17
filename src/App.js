import React from 'react';

const todoList = [
  {
    id: 1,
    title: 'Wake Up'
  },
  {
    id: 2,
    title: 'Eat your Breakfast'
  },
  {
    id: 3,
    title: 'Drive to Work'
  },
  {
    id: 4,
    title: 'Spend 8 hours Productively'
  },
  {
    id: 5,
    title: 'Drive Back Home'
  },
  {
    id: 6,
    title: 'Zoom Code the Dream'
  },
  {
    id: 7,
    title: 'Do your College Work'
  },
  {
    id: 8,
    title: 'Eat your Supper'
  },
  {
    id: 9,
    title: 'Go to Sleep'
  }
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <hr/>
      <ul>
        {todoList.map(function(item) {
          return (
          <li key={item.id}>
            {item.title}
            </li>
          );
          })}
      </ul>
    </div>
  );
}

export default App;
