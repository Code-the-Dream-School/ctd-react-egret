import React from 'react'
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from'./TodoList'
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';

function TodoContainer({addTodo, displayTodo, removeTodo, isLoading}){
  console.log(displayTodo)
  const [value, onChange] = useState(new Date());

  const handleDate = (event) => {
    console.log(event)
    onChange(event)
  };
  return (
    <>
    <Calendar
        onChange={handleDate}
        value={value}
        className="react-calendar"
      />
    <div className="todo">
      <AddTodoForm onAddTodo={addTodo} value={value}/>
      {isLoading ? <span>Loading...</span> : <TodoList todoList={displayTodo} onRemoveTodo={removeTodo}/>}
    </div>
    </>
  )
}

TodoContainer.propTypes = {

};

export default TodoContainer;