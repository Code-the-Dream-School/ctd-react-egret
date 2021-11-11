import React from "react";
import InputWithLabel from "./InputWithLabel";
import "./styles.css";

const AddTodoForm = ({onAddTodo, home}) => {
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
        className='formTextbox'
        title={todoTitle}
        isFocused
        home={home}
        onTitleChange={handleTitleChange}>
        Title:
      </InputWithLabel>
      <button className='button' type='submit' disabled={!todoTitle}>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
