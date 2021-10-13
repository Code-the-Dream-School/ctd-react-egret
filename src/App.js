import React, { useState, useEffect } from 'react';

import TodoList from "./TodoList";
import AddTodoform from "./AddTodoForm";

function App() {

  const [todoList, setTodoList] = React.useState([]);
const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) } }),2000);
    })
      .then((result) => {
        setTodoList(result.data.todoList)
        setIsLoading(false);
      })

  }, []);
  React.useEffect(() => {
    if (!isLoading){
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }
    
  }, [todoList, setIsLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };
  function removeTodo(id) {
    const newTodoList = todoList.filter(function (item) {
      return item.id !== id
    })
    setTodoList(newTodoList)
  };


  return (
    <>
      <h1>Todo List</h1>
      
      
      <AddTodoform onAddTodo={addTodo} />
      
{isLoading? (<p>loading...</p>):( <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
)}
     
    </>
  );
}

export default App;
