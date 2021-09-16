import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function App() {
  const [todoList , setTodoList ] = useState([])
  function addTodo(newTodo){
    setTodoList([...todoList, newTodo])
  }
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
      <h1>Todo List</h1>
      <AddTodoForm  onAddTodo={addTodo}/>

        <TodoList todoList= {todoList}/>
      </header>
    </div>
  );
}

export default App;
