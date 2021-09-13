import React from "react";
import {v4 as uuidv4} from "uuid";

const AddTodoForm = ({onAddTodo}) => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const handleTitleChange = (e) => {
    const newTodoTitle = e.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (e) => {
    onAddTodo({id: uuidv4(), title: todoTitle});
    setTodoTitle("");
    e.preventDefault();
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor='todoTitle'>Title: </label>
      <input
        id='todoTitle'
        name='title'
        type='text'
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddTodoForm;
