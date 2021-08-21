import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
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
