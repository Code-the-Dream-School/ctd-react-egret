import React from 'react';
const todoList = [{
  id: 1,
  title: "Go to gym"
},
{
  id: 2,
  title: "Read books"
},
{
  id: 3,
  title: "Listen Music"
},{
  id: 4,
  title: "Play Video Games"
},
{
  id: 5,
  title: "Watch Sport"
}
]

function App() {

  return (
    <div style={{ textAlign: 'center' }}>
      <header>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo)=>{
          return <li key={todo.id} >
            {todo.title}
          </li>
        })}
      </ul> 
      </header>
    </div>
  );
}

export default App;
