import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  const [newTodo, setNewTodo] = useState([])
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
      <h1>Todo List</h1>
      <AddTodoForm  onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
