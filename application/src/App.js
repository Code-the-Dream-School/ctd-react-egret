import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import AddTodoForm from './AddTodoForm';





function App() {
  return (
  <div>
  <h1>Todo list</h1>
  <AddTodoForm />
  <TodoList />
  </div>
  );
}

export default App;
