import React from 'react';

import TodoList from "./TodoList";
import AddTodoform from "./AddTodoForm";
function App() {
 
  const[todoList, setTodoList] = React.useState([]);
const addTodo = (newTodo) => {
  setTodoList ([...todoList, newTodo])
};
function removeTodo(id) {
  const newTodoList = todoList.filter(function(item){
    return item.id !==id
  })
  setTodoList(newTodoList)
};
 
  return (
    <div>
      <h1>Todo List</h1> 
      <AddTodoform onAddTodo={addTodo}/>
  
      <TodoList onRemoveTodo ={removeTodo} todoList = {todoList}/>
     
    </div>
  );
}

export default App;
