import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styles from './App.module.css';
import logo from './components/IMG/202111-todo-item.jpg'
import TodoContainer from './components/TodoContainer.js'


import Inspiration from './components/Inspiration';


function App() {

  const [activeButton, setButton] = useState('fun')

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
              {/* <h1>Fun Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              <p>{isLoading ?'Loading...' : null}</p>
              <TodoList  todoList={todoList} onRemoveTodo = {removeTodo}/>
              <Inspiration /> */}
            <TodoContainer tableName="Default" />
            <Inspiration />
            </>
          </Route>
          <Route path="/Work">
            <>
            <TodoContainer tableName="List 2" />
            <Inspiration />
            </>
          </Route>

          <Route path="/Education">
            <TodoContainer tableName="List 3" />
            <Inspiration />
          </Route>
          <Route path="/Health">
            <TodoContainer tableName="List 4" />
            <Inspiration />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
 


export default App;
