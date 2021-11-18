import React, {useState, useEffect} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from'./TodoList'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const headers = { 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}` }
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, { headers })
    .then(response => response.json())
    .then((result) => {
      setTodoList(result.records);
      setIsLoading(false);
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
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <h1>Todo List</h1>
          <AddTodoForm onAddTodo={addTodo} />
          {isLoading ? <span>Loading...</span> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
        </Route>
        <Route path="/new">
          <h1>New Todo List</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
