import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './style.css';

const useSemiPersistentState = () => {

  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList') || '[]')
  );

  React.useEffect(() => {
    const json = JSON.stringify(todoList);
    localStorage.setItem('savedTodoList', json )
  },[todoList])

  return [todoList, setTodoList]

}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState()

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  function removeTodo(id) {
    const newList = todoList.filter(
      (todo) => todo.id !== id
    )
    setTodoList(newList)
  }

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
  );
}

export default App
