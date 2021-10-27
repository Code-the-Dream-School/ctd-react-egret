import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  function handleAddTodo(event) {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({fields: { Title: todoTitle }});
    setTodoTitle("");
  }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title:
        </InputWithLabel>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
