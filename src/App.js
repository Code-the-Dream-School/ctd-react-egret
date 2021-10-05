import React ,{useState, useEffect} from 'react';

import TodoList from "./TodoList";
import AddTodoform from "./AddTodoForm";
function useSemiPersistentState(){
  const [todoList, setTodoList] = useState(
    localStorage.getItem ('savedTodoList')? JSON.parse(localStorage.getItem('savedTodoList')): []
  );
  useEffect(()=>{
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  },[todoList]);
  return [todoList, setTodoList];
}
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
