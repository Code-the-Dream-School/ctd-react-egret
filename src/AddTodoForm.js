import React from 'react';

function AddTodoForm(props) {
  const formRef = React.useRef(null);

  function handleAddTodo(event) {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    formRef.current.reset();
  }

  return (
    <form onSubmit={handleAddTodo} ref={formRef}>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" id="todoTitle" name="title"/>
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;