import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function useSemiPersistentState(){
  const todoString =  localStorage.getItem("savedTodoList")
  const parsedArray = JSON.parse(todoString)
  const [todoList , setTodoList ] = useState(parsedArray);

  useEffect(()=>{
    const convertedTodo = JSON.stringify(todoList)
    localStorage.setItem("savedTodoList", convertedTodo)
  
  },[todoList])
  return [todoList, setTodoList]
}

function App() {
  const [todoList , setTodoList ] = useSemiPersistentState();

  function addTodo(newTodo){
    setTodoList([...todoList, newTodo])
  }
  return (
    <>
    <div style={{ textAlign: 'left' }}>
      <header>
      <h1>Todo List</h1>
      <AddTodoForm  onAddTodo={addTodo}/>
      <TodoList todoList= {todoList}/>
      </header>
    </div>
    </>
  );
}

export default App;
