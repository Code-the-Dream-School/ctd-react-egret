import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const useSemiPersistentState = (storageKey) => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem(storageKey)) || []
  );

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(todoList));
  }, [todoList, storageKey]);

  return [todoList, setTodoList];
};

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList");

  const addTodo = (newTodo) => {
    setTodoList((todoList) => [...todoList, newTodo]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
};

export default App;
