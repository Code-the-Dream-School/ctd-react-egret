import React, {useState, useEffect} from 'react';
import CategoryList from './components/CategoryList'
import TodoContainer from './components/TodoContainer'
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
        <Route exact path="/">
          <div className="">
            <div className="header">
              <h1>Todo List</h1>
            </div>
            <CategoryList categories={categoryList} chooseCategory={chooseCategory}/>
            
          </div>
        </Route>
        {categoryList.map((category)=>(
          <Route
            key={category.id}
            path={`/${category.fields.Name}`}
            children={() => {
              <TodoContainer 
              addTodo={addTodo}
              displayTodo={displayTodo}
              removeTodo={removeTodo}
              isLoading={isLoading}
            />
            }}
          />
        ))}
    </BrowserRouter>
  )
}

export default App;
