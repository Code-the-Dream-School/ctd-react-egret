import React,{useState} from 'react'
function AddTodoForm({onAddTodo}) {
  const[todoTitle, setTodoTitle]= useState("");

  const handleTitleChange= (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    

  };



  function handleAddTodo(event) {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({ title:todoTitle, id:Date.now()});
    setTodoTitle("");
  }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title: </label>
        <input onChange={handleTitleChange} value={todoTitle} name="title" id="todoTitle"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
