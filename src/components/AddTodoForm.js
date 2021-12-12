import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenFancy} from "@fortawesome/free-solid-svg-icons";
import InputWithLabel from "./InputWithLabel";
import "../index.css";
import styles from "./TodoContainer/TodoContainer.module.css";

const AddTodoForm = ({listName, onAddTodo}) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo(listName, todoTitle);
    setTodoTitle("");
  };

  return (
    <form
      data-testid='add-todo-form'
      className={styles.todoForm}
      onSubmit={handleAddTodo}>
      <InputWithLabel
        title={todoTitle}
        isFocused
        onTitleChange={handleTitleChange}>
        Add Todo:
      </InputWithLabel>
      <button className={styles.addButton} type='submit' disabled={!todoTitle}>
        <FontAwesomeIcon icon={faPenFancy} />
      </button>
    </form>
  );
};

AddTodoForm.propTypes = {
  listName: PropTypes.string.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
