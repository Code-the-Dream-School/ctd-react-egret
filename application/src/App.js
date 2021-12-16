import React, {useState, useEffect} from 'react';
import TodoContainer from './components/TodoContainer'
import Header from './components/Header'
import './App.css'
import {
  BrowserRouter,
  Route
} from "react-router-dom";

function App() {
  const [changed, setChanged] = useState(true);
  const [todoList, setTodoList] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [displayTodo, setDisplayTodo] = useState([]);
  const [choosedCategory, setChoosedCategory] = useState(0);
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
      setIsLoading(false);
    });
  }, [changed])

  const addTodo = (newTodoTitle, date) => {
    const newtodo = {
      "records": [
        {
          "fields": {
            "Categories": [
              choosedCategory
            ],
            "Title": newTodoTitle,
            "Date": date.toISOString().substring(0, 10)
          },
        },
      ]
    }
    console.log(newtodo)

    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Todos`,
    { method: 'POST',
    body: JSON.stringify(newtodo),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
    }
    }).then(res => res.json())
      .then(res =>setChanged(false));
  }
  // console.log(displayTodo)
  function removeTodo(id) {
    const newList = displayTodo.filter(
      (todo) => todo.id !== id
    )
    setDisplayTodo(newList)
  }

  const chooseCategory = (index, id) => {
    setChoosedCategory(id);
    var todosId = categoryList[index].fields.Todos;
    // console.log(todosId)
    var array = [];
    todosId.forEach( (id) => {
      var temp = todoList.filter((todo) => todo.id === id)
      array.push(temp[0])
    })
    setDisplayTodo(array)
  }

  return (
    <BrowserRouter>
    <Header categories={categoryList} chooseCategory={chooseCategory}/>
      <Route exact path="/">
        <TodoContainer
          addTodo={addTodo}
          displayTodo={displayTodo}
          removeTodo={removeTodo}
          isLoading={isLoading} 
        />
      </Route>
      {categoryList.map((category)=>(
        <Route key={category.id} path={`/${category.fields.Name}`}>
          <TodoContainer
            addTodo={addTodo}
            displayTodo={displayTodo}
            removeTodo={removeTodo}
            isLoading={isLoading}
          />
        </Route>
      ))}
    </BrowserRouter>
  )
}

export default App;
