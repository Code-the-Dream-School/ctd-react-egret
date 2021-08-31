import {react, useState} from "react"
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newTodo,setNewTodo] = useState('');
  return (
    <div>
      <h1>To do List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
