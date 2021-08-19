import React from 'react';
import TodoList from "./TodoList";
import AddTodoform from "./AddTodoForm";
function App() {
  return (
    <div>
      <h1>Todo List</h1> 
      <AddTodoform/>
      <TodoList/>
     
    </div>
  );
}

export default App;
