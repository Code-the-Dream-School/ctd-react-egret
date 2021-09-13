import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js'



  

function App() {
  const [newTodo, setNewTodo] = React.useState("");

  
  return (
    <div>
      <h1>Todo List</h1>
   
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>Successfully Added: {newTodo}</p>
      <TodoList />
   
   <hr />
   
   </div>
   )}
   export default App;