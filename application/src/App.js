
import './App.css';
import TodoList from './Todolist';
import AddTodoForm from './AddTodoForm';
import { useState, useEffect } from 'react';


const useSemiPersistentState = () => {

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList') || '[]')
  );

  useEffect(() => {
    const json = JSON.stringify(todoList);
    localStorage.setItem('savedTodoList', json )
  },[todoList])

  return [todoList, setTodoList]

}


function App() {


  const [todoList, setTodoList] = useSemiPersistentState()


    const addTodo = (newTodo) => {
      setTodoList([...todoList, newTodo])
    } 

  return (
    <>
    <div className="Header">
      <header>
        <h1>Todo List</h1>
      </header>
        <AddTodoForm onAddTodo={addTodo} />
        <p>Added Succesfully: {(todoList.length !==0)? todoList[todoList.length-1].title : null}</p>
        <TodoList todoList={todoList} />
    </div>
    </>
  );
}
export default App;
