import React, { useEffect, useReducer } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import todoListReducer, { actions } from "./todoListReducer";

//retrieve an initial todolist from localstorage
const initialTodo = JSON.parse(localStorage.getItem("savedTodoList"));

//custom hook
const useSemiPersistentState = () => {
  const [todoList, dispatchTodoList] = useReducer(todoListReducer, {
    data: [], //use an empty string as an initial state
    isLoading: false,
    isError: false,
  });
  
  useEffect(() => {
    //side effect handler function to save the updated list in the localstorage
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, dispatchTodoList];
};

const getAsynchTodo = () => 
  new Promise((resolve) => 
    setTimeout(
      () =>
        resolve({
          data: {
            todoList: initialTodo,
          },         
        }),
      2000
    )
  )

function App() {
  const [todoList, dispatchTodoList] = useSemiPersistentState(); 

  React.useEffect(() => {
    dispatchTodoList({ type: actions.init });

    getAsynchTodo()
      .then((result) => {
        dispatchTodoList({
          type: actions.fetchSuccess,
          payload: result.data.todoList,
        });
      })
      .catch(() => dispatchTodoList({ type: actions.fetchFail }));
  }, []);

  const addTodo = (newTodo) => {
    dispatchTodoList({
      type: actions.addTodo,
      payload: newTodo,
    });
  };

  const removeTodo = (id) => {
    dispatchTodoList({
      type: actions.removeTodo,
      payload: id,
    });
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

      {todoList.isError && <p>Something went wrong ...</p>}

      {todoList.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {todoList.data[0] ? (
            <p>
              Last item succcesfully added:{" "}
              <strong> {todoList.data[todoList.data.length - 1].title} </strong>
            </p>
          ) : null}
          <TodoList todoList={todoList.data} onRemoveTodo={removeTodo} />
        </>
      )}
    </div>
  );
}

export default App;
