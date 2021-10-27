import React from "react";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
  const addTodo = (newTodo) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, 
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      }
      ).then(response => response.json())
        .then(serverResponseTodo => setTodoList([...todoList, serverResponseTodo]));
  };

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);


console.log(process.env)
console.log(process.env.REACT_APP_AIRTABLE_API_KEY)


  React.useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, 
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        } 
        
      }
      )
        .then((resp) => resp.json())
        .then((data) => {
          setTodoList(data.records);
          setIsLoading(false);
    });
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function removeTodo(id) {
    const newTodoList = todoList.filter(function (item) {
      return item.id !== id;
    });
    setTodoList(newTodoList);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <new />
          <h1>Todo List</h1>
          <AddTodoForm onAddTodo={addTodo} />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          )}
        </Route>
        <Route path="/new">
          <h1>New Todo List</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
