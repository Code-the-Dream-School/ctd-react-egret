import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")),
          },
        });
      }, 5000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
  }, []);

  useEffect(() => {
    //side effect handler function to save the list in the localstorage
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

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
