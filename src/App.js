import React, {useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
    const [todoList, setTodoList] = useSemiPersistentState();
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
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
}

export default App;
