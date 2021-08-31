import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [ newTodo, setNewTodo ] = React.useState('');
  
  return (
    <div style={{textAlign: 'left'}}>
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={setNewTodo} />

      <p>
        Sucsessfully added: {newTodo}.
      </p>

      <TodoList />
    </div>
  );
}

export default App;
