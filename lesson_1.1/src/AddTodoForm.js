import React from "react";
import TodoList from "./TodoList";
function AddTodoForm(props) {
  function handleAddTodo(event) {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    console.log(todoTitle);
    event.target.reset();
    props.onAddTodo(todoTitle);
  }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title: </label>
        <input name="title" id="todoTitle"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
