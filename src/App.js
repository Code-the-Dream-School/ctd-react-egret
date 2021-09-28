import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

//custom hook
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(
    //retrieve the value from localstorage or pass an initial state
    JSON.parse(localStorage.getItem(key)) || initialState
  );

  useEffect(() => {
    //side effect handler function to save the list in the localstorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList", []); //use an empty string as an initial state

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
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;
