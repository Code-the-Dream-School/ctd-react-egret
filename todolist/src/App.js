import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  //   new Promise((resolve, reject) => {
  //     setTimeout(
  //       () =>
  //         resolve({
  //           data: {
  //             todoList: JSON.parse(localStorage.getItem("savedTodoList")),
  //           },
  //         }),
  //       2000
  //     );  
  //   }).then((result) => {
  //     setTodoList(result.data.todoList);
  //     setIsLoading(false);
  //   });
  // }, []
  );
  
      fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`) ,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });

      }, 

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
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>...is Loading</p>
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
      )}
    </>
  );
}

export default App;
