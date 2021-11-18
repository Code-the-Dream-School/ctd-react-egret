import React from 'react'
import { useState } from 'react';

const AddTodoForm = (props) => {
  const[todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    props.onAddTodo({title: todoTitle, id: Date.now()})
    setTodoTitle('');
  }

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle" >Title: </label>
        <input onChange={handleTitleChange} value={todoTitle} type="text" id="todoTitle" name="title"/> 
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm