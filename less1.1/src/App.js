import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';

function App() {

  const addTodo = (newTodo) => { 
    setTodoList([...todoList, newTodo]);
   };  

  const [todoList, setTodoList] = React.useState([]);

  const removeTodo = (id) => {
    const newTodoList = todoList.filter(
      (item) => item.id !== id
    )
    setTodoList(newTodoList);
  };

  return (
    // <> called fragment, used instead of div not to create to many divs
    <> 
      <h1>TODO list</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList  todoList={todoList} onRemoveTodo = {removeTodo}/>
    </>
  );
}

export default App;
