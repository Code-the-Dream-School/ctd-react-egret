import React from 'react';

import TodoList from "./TodoList";
import AddTodoform from "./AddTodoForm";
function App() {
  const[todoList, setTodoList] = React.useState([]);
const addTodo = (newTodo) => {
  setTodoList ([...todoList, newTodo])
}
 
  return (
    <div>
      <h1>Todo List</h1> 
      <AddTodoform onAddTodo={addTodo}/>
  
      <TodoList todoList = {todoList}/>
     
    </div>
  );
}

export default App;
