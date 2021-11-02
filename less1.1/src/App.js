import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';


function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve({data: {todoList: JSON.parse(localStorage.getItem('savedTodoList')) } }), 
        2000
      )
    }
    )
    .then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
  }, []);


  React.useEffect(
    () => {
      if (isLoading === false) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));}},
    [todoList]
  );

  const addTodo = (newTodo) => { 
    setTodoList([...todoList, newTodo]);
   };  



  const removeTodo = (id) => {
    const newTodoList = todoList.filter(
      (item) => item.id !== id
    )
    setTodoList(newTodoList);
  };

  return (
    <> 
      <h1>TODO list</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <p>{isLoading ?'Loading...' : null}</p>
      <TodoList  todoList={todoList} onRemoveTodo = {removeTodo}/>
    </>
  );
}

export default App;
