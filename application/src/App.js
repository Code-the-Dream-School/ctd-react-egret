
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
    function removeTodo(id) {
      const newList = todoList.filter(
        (todo) => todo.id !== id
      )
      setTodoList(newList)
      
    }

    return (
      <>
        <header>
          <h1>Todo List</h1>
        </header>
          <AddTodoForm onAddTodo={addTodo} />
          <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      </>
    );
  }
export default App;
