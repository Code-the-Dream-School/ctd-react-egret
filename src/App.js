import React from 'react';
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import './style.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>
        <AddTodoForm />
        <TodoList />
    </div>
  );
}

export default App;
