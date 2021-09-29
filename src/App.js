import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  const [ todoList, setTodoList ] = React.useState(
    JSON.parse( localStorage.getItem('savedTodoList') ) || []
  );

  React.useEffect(() => {
    localStorage.setItem( 'savedTodoList', JSON.stringify(todoList) );
  }, [ todoList ]);

  return [ todoList, setTodoList ];
};

function App() {
  const [ todoList, setTodoList ] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter(li => id !== li);

    setTodoList(newTodoList);
  }
  
  return (
    <div style={{textAlign: 'left'}}>
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;
