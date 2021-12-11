import React from 'react'
import AddTodoForm from './AddTodoForm';
import TodoList from'./TodoList'
import PropTypes from 'prop-types';

function TodoContainer({addTodo, displayTodo, removeTodo, isLoading}){
console.log(displayTodo)
  return (
    <div className="todo">
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <span>Loading...</span> : <TodoList todoList={displayTodo} onRemoveTodo={removeTodo}/>}
    </div>
  )
}

TodoContainer.propTypes = {

};

export default TodoContainer;