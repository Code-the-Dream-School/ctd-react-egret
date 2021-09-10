import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './style.css';
function App() {
  
  const [newTodo, setNewTodo] = React.useState("");

  return (
    <div>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={setNewTodo} />
        <p>{newTodo}</p>      
        <TodoList />
    </div>
  );
}

export default App;
