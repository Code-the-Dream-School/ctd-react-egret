
import './App.css';
import TodoList from './Todolist';
import AddTodoForm from './AddTodoForm';
import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  } 

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact>
          <div className="Header">
            <header>
              <h1>Todo List</h1>
            </header>
              <AddTodoForm onAddTodo={addTodo} />
              <p>Added Succesfully: {(todoList.length !==0)? todoList[todoList.length-1].title : null}</p>
              <TodoList todoList={todoList} />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
