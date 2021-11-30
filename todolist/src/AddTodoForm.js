import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState("");
  const { onAddTodo } = props;

  function handleTitleChange(event) {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    if (todoTitle === "") {
      return false;
    }
    onAddTodo({
      createdTime: Date.now(),
      fields: { Title: todoTitle },
      id: Date.now(),
    });
    setTodoTitle("");
  }
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Targets:
        </InputWithLabel>

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTodoForm;
