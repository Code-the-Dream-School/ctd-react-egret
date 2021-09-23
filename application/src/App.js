
import './App.css';
import TodoList from './Todolist';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';



function App() {

  const [todoList, setTodoList] = useState([]);
    const addTodo = (newTodo) => {
      setTodoList([...todoList, newTodo])
    } 

  return (
    <div className="Header">
      <header>
        <h1>Todo List</h1>
      </header>
        <AddTodoForm onAddTodo={addTodo} />
        <p>Added Succesfully: {(todoList.length !==0)? todoList[todoList.length-1].title : null}</p>
        <TodoList todoList={todoList} />
    </div>
  );
}


export default App;
