import React from "react";


function AddTodoForm(props) {
  const[todoTitle, setTodoTitle]= React.useState("");
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    console.log(event);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);
    props.onAddTodo({title:todoTitle,id:Date.now()});
    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>

      <input onChange={handleTitleChange} value={todoTitle} type="text" id="todoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddTodoForm;
