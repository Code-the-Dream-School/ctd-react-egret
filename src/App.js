import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import TodoContainer from './components/TodoContainer'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/personal">
              <button className='listbutton' type='button'>
                PERSONAL
              </button>
            </Link>
          </li>
          <li>
            <Link to="/work">
              <button className='listbutton' type='button'>
                WORK
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/personal">
          <TodoContainer tableName="PERSONAL" />
        </Route>

        <Route path="/work">
          <TodoContainer tableName="WORK" />
        </Route>

        <Route path="*">
          <>
            <div className="listtitle">
              <h1>Select a todo list from the menu</h1>
            </div>
          </>
        </Route>
      </Switch>
    </BrowserRouter >
  )
}

export default App;
