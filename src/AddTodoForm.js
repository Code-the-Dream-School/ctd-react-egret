import React from "react";

function AddTodoForm(props) {
  const handleAddTodo = (event) => {

    //prevent a default behavior from submit
    event.preventDefault();

    //extract an input value and save it as a variable
    const todoTitle = event.target.title.value;
    console.log(todoTitle);

    //callback handler
    props.onAddTodo(todoTitle);
    //reset the input field
    event.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title:</label>
      <input id="todoTitle" type="text" name="title"></input>
      <button type="submit">Add</button>
    </form>
  );
}


export default AddTodoForm;
