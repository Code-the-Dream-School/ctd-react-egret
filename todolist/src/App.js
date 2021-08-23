import React from 'react';
const todolist = [{
  id: 1,
  title: "buy groceries"
},
  {
  id: 2,
  title: "go to the gym"
  },
  {
  id: 3,
  title: "clean the house"
  }
];
function App() {
  return (
    <div>
    <h1>Todo list</h1>
    <ul>
      {
        todolist.map((item)=> {
          return (<li key={item.id}>{item.title}</li>)
        })
      }
    
    </ul>
    </div>
  );
}

export default App;
