import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        setTodoList(data.records);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function removeTodo(id) {
    let filtered = todoList.filter((x) => x.id !== id);
    setTodoList(filtered);
  }
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? (
              <p>...is Loading</p>
            ) : (
              <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
            )}
          </Route>
          <Route path="/new">
            <h1>New TodoList</h1>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
