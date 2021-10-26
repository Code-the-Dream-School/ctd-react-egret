import React from "react";
import InputWithLabel from "./InputWithLabel";
// removed uuid from import as unnecessary

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo(todoTitle);
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        title={todoTitle}
        isFocused
        onTitleChange={handleTitleChange}>
        Title:
      </InputWithLabel>
      &nbsp;
      <button type='submit' disabled={!todoTitle}>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
