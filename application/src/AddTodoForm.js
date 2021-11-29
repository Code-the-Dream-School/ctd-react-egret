import React from 'react'
import { useState } from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = (props) => {
  const[todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    props.onAddTodo({id: Date.now(), fields: {Title: todoTitle}})
    setTodoTitle('');
  }

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }; 

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel 
          todoTitle={todoTitle} 
          handleTitleChange={handleTitleChange}
        >
          <strong>Title : </strong>
        </InputWithLabel>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm