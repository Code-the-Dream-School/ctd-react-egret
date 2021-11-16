import React from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styles from './App.module.css';
import logo from './IMG/202111-todo-item.jpg'


function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`);

  React.useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, 
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,     
        },
      }
    ).then((resp) => resp.json())
    .then((data) => {
      setTodoList(data.records);
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
    <BrowserRouter>
      <div className={styles.wholePage}>
        <header className={styles.headerMain}>
          <img src={logo} alt="Logo" className={styles.headerImg} />
          <nav className={styles.headerNav}> 
            <ul className={styles.headerLists}>
              <li className={styles.headerList1}>
                <Link to="/">Fun</Link>
              </li>
              <li className={styles.headerList2}>
                {/* <a href="/work">Work</a> */}
                <Link to="/Work">Work</Link>
              </li>
              <li className={styles.headerList3}>
                <Link to="/Education">Education</Link>
              </li>
              <li className={styles.headerList4}>
                <Link to="/Health">Health</Link>
              </li>
            </ul>
          </nav>
          
        </header>

        <Switch>
          <Route exact path="/">
            <> 
              <h1>Fun Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              <p>{isLoading ?'Loading...' : null}</p>
              <TodoList  todoList={todoList} onRemoveTodo = {removeTodo}/>
            </>
          </Route>
          <Route path="/Work">
            <h1>Work Todo List</h1>
          </Route>
          <Route path="/Education">
            <h1>Education Todo List</h1>
          </Route>
          <Route path="/Health">
            <h1>Health Todo List</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
 


export default App;
