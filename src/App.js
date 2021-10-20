import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Todo List`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        }
      }
    )
    .then((response) => response.json())
    .then((result) => {
        result.records.sort((a,b) => {
        return a.createdTime > b.createdTime ? 1 : -1
      })
      setTodoList(result.records)
      setIsLoading(false)
    })
  }, []);

  
  const addTodo = (newTodo) => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Todo List`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Title: newTodo.fields.Title
              }
            }
          ]
        })
      }
    )
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
console.log(todoList)
  //add styles to the div element through creating a style object
  const divStyles = {
    backgroundColor: "lightblue",
    fontFamily: "Arial",
    fontSize: 20,
  };

  return (
    <div style={divStyles}>
      <h1 style={{ color: "darkred" }}>To Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {todoList[0] ? (
        <p>
          Last item succcesfully added:{" "}
          <strong> {todoList[todoList.length - 1].title} </strong>
        </p>
      ) : null}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
}

export default App;
