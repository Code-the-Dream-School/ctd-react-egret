import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';

function App() {

  const addTodo = (newTodo) => { 
    setTodoList([...todoList, newTodo]);
   };  

  const [todoList, setTodoList] = React.useState([]);

  return (
    // <> called fragment, used instead of div not to create to many divs
    <> 
      <h1>TODO list</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList  todoList={todoList} />
    </>
  );
}

export default App;
