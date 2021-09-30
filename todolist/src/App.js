import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("savedTodoList")
      ? JSON.parse(localStorage.getItem("savedTodoList"))
      : []
  );

  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];
}



function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  
  function removeTodo(id) {
    let filtered = todoList.filter( (x) => x.id !== id);
    setTodoList(filtered);
  }
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm  onAddTodo={addTodo} />

      <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
    </>
  );
}

export default App;
