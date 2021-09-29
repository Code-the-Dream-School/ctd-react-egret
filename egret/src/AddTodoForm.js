import React from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = React.useState("");
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    console.log(event);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);
    props.onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        Title
      </InputWithLabel>
    </form>
  );
}
export default AddTodoForm;
