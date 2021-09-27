import React from "react";
import { useState } from "react/cjs/react.development";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  //update the todoTitle state with input value
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  //function to pass a new title to the todolist as an obj
  const handleAddTodo = (event) => {
    //prevent a default behavior from submit
    event.preventDefault();

    if (todoTitle) {  //to avoid an empty string
      //callback handler
      onAddTodo({
        title: todoTitle,
        id: Date.now(),
      });
    } else {
      alert("Empty string is not accepted")
    }
    // reset the todoTitle state to an empty String
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input
        id="todoTitle"
        type="text"
        value={todoTitle}
        onChange={handleTitleChange}
        name="title"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
