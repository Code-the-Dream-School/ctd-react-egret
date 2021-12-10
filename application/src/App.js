import React, {useState, useEffect} from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from'./components/TodoList'
import CategoryList from './components/CategoryList'
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [displayTodo, setDisplayTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const headers = { 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}` }
    Promise.all([
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Todos`, { headers }),
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Categories`, { headers })
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([result1, result2]) => {
      setTodoList(result1.records);
      setDisplayTodo(result1.records);
      setCategoryList(result2.records);
      console.log(result1.records)
      console.log(result2.records)
      setIsLoading(false);
    });
  }, [])

  useEffect(() => {
    if(isLoading === false) {
      const json = JSON.stringify(todoList);
      localStorage.setItem('todoList', json)
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setDisplayTodo([...displayTodo, newTodo])
  }

  function removeTodo(id) {
    const newList = displayTodo.filter(
      (todo) => todo.id !== id
    )
    setDisplayTodo(newList)
  }

  const chooseCategory = (index) => {
    var todoId = categoryList[index].fields.Todos;
    console.log(todoId)
    var array = [];
    todoId.forEach( (id) => {
      var temp = todoList.filter((todo) => todo.id === id)
      array.push(temp[0])
    })
    setDisplayTodo(array)
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="">
            <div className="header">
              <h1>Todo List</h1>
            </div>
            <CategoryList categories={categoryList} chooseCategory={chooseCategory}/>
            <div className="todo">
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? <span>Loading...</span> : <TodoList todoList={displayTodo} onRemoveTodo={removeTodo}/>}
            </div>
          </div>
        </Route>
        <Route path="/new">
          <h1>New Todo List</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
