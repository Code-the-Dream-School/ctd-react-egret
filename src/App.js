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
  const[todoList, setTodoList] =useSemiPersistentState();
const addTodo = (newTodo) => {
  setTodoList ([...todoList, newTodo])
}
// localStorage.setItem("savedTodoList", todoList);

//    useEffect(()=>{
//      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
//    }, [todoList])
   
//   localStorage.getItem('savedTodoList')
  
  return (
    <div>
      <h1>Todo List</h1> 
      <AddTodoform onAddTodo={addTodo}/>
  
      <TodoList todoList = {todoList}/>
     
    </div>
  );
}

export default App;
