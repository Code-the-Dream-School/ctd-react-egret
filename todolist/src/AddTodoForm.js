import React from "react";

function AddTodoForm(props) {
  const formRef= React.useRef(null);

  function handleAddTodo(event) {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    console.log(todoTitle);
    formRef.current.reset();
    props.onAddTodo(todoTitle);
  }
  return (
    <div>
      <form onSubmit={handleAddTodo} ref={formRef}>
        <label>Title: </label>
        <input id="todoTitle" name="title"></input>
        <label htmlFor="todoTitle"></label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
