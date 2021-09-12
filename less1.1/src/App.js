import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';

function App() {
  const [newTodo, setNewTodo] = React.useState('');
  return (
    // <> called fragment, used instead of div not to create to many divs
    <> 
      <h1>TODO list</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
    </>
  );
}

export default App;
