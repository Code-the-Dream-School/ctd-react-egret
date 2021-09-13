import React from 'react';
import TodoList from "./TodoList";
import AddTodoform from "./AddTodoForm";
function App() {
  const [newTodo, setNewTodo] = React.useState("")
 
  return (
    <div>
      <h1>Todo List</h1> 
      <AddTodoform onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList/>
     
    </div>
  );
}

export default App;
