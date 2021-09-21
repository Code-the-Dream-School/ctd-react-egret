import React, { useState } from "react";

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState("");
  const { onAddTodo } = props;

  function handleTitleChange(event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }
  

  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo({title: todoTitle, id: Date.now()});
    setTodoTitle("");
  }
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <label>Title: </label>
        <input
          id="todoTitle"
          name="title"
          value={todoTitle}
          onChange={handleTitleChange}
        ></input>
        <label htmlFor="todoTitle"></label>
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTodoForm;
