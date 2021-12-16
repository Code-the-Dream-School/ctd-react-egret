import React from 'react'
import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from 'prop-types';

const AddTodoForm = (props) => {
  const[todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    props.onAddTodo(todoTitle, props.value)
    setTodoTitle('');
  }

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }; 
  
  return (
    <div>
      
      <form onSubmit={handleAddTodo}>
        <div className="input-group">
        <InputWithLabel 
          todoTitle={todoTitle} 
          handleTitleChange={handleTitleChange}
        />
        <button type="submit" className="add-button">Add Todo</button>
        </div>
      </form>
    </div>
  )
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func
};

export default AddTodoForm