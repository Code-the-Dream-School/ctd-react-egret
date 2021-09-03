
import './App.css';
import TodoList from './Todolist';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';



function App() {

  const [newTodo, setNewTodo] = useState([])
  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
      </header>
        <AddTodoForm onAddTodo={setNewTodo}/>
        <p>Added Succesfully: {newTodo}</p>
        <TodoList />
    </div>
  );
}


export default App;
