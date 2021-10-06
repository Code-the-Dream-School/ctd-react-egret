import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import useSemiPersistentState from "./persistState";

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState("todoList", []);

  const addTodo = (newTodo) => {
    setTodoList((todoList) => [...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
  );
};

export default App;
