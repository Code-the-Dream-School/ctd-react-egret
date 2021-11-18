import React, { useState } from 'react';
import TodoList from './TodoList.js';
import AddTodoForm from './AddTodoForm.js';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styles from './App.module.css';
import logo from './IMG/202111-todo-item.jpg'


function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setButton] = useState('fun')

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
              <li 
                className={activeButton === "fun" ? `${styles.headerList1} ${styles.active}` : styles.headerList1}
                onClick={() => setButton("fun")}
                >
                <Link to="/">Fun</Link>
              </li>
              <li 
                className={activeButton === "work" ? `${styles.headerList2} ${styles.active}` : styles.headerList2}
                onClick={() => setButton("work")}
              >
                {/* <a href="/work">Work</a> */}
                <Link to="/Work">Work</Link>
              </li>
              <li 
                className={activeButton === "education" ? `${styles.headerList3} ${styles.active}` : styles.headerList3}
                onClick={() => setButton("education")}
              >
                <Link to="/Education">Education</Link>
              </li>
              <li 
                className={activeButton === "health" ? `${styles.headerList4} ${styles.active}` : styles.headerList4}
                onClick={() => setButton("health")}
              >
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
