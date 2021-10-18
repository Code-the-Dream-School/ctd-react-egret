import React, {useState, useEffect} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './style.css';

function App() {

  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            data : { 
              todolist : JSON.parse(localStorage.getItem('todoList')) 
             } 
           })
        }, 2000);
      }).then((result) => {
        setTodoList(result.data.todolist);
        setIsLoading(false)
      })
    }, [])

    useEffect(() => {
      if(isLoading === false) {
       const json = JSON.stringify(todoList);
       localStorage.setItem('todoList', json)
      }
     }, [todoList, isLoading]);  

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
        {isLoading ? <span>Loading...</span> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
    </>
  );
}

export default App
