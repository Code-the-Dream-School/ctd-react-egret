import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            data: {
              todoList: JSON.parse(localStorage.getItem('savedTodoList')) || []
            },
          }),
        2000
      )
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
  }, [])

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    let filteredList = todoList.filter((element) => element.id !== id);
    setTodoList(filteredList);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {(isLoading) ? (<p>Loading...</p>) : (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)}    </>
  );
}

export default App;
