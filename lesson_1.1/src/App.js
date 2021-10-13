import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const initialTodoList = JSON.parse(localStorage.getItem("savedTodoList"));

function App() {
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve({ data: { todoList: initialTodoList } }), 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  React.useEffect(() => {
    if (!isLoading)
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList, isLoading]);

  function removeTodo(id) {
    const newTodoList = todoList.filter(function (item) {
      return item.id !== id;
    });
    setTodoList(newTodoList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}
export default App;
