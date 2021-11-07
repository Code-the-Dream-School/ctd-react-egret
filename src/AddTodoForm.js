import React from "react";
import InputWithLabel from "./InputWithLabel";
import "./index.css";
import styles from "./AddTodosForm.module.css";

const AddTodoForm = ({onAddTodo}) => {
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
    <form class={styles.todoForm} onSubmit={handleAddTodo}>
      <InputWithLabel
        title={todoTitle}
        isFocused
        onTitleChange={handleTitleChange}>
        Add Todo:
      </InputWithLabel>
      <button className={styles.addButton} type='submit' disabled={!todoTitle}>
        &#128221;
      </button>
    </form>
  );
};

export default AddTodoForm;
