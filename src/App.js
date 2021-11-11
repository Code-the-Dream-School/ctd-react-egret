import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import TodoContainer from './TodoContainer'
import './index.css'

function App() {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <Link to="/personal">
              <button className='listbutton' type='button'><span>
                Personal
              </span></button>
            </Link>
          </li>
          <li>
            <Link to="/work">
              <button className='listbutton' type='button'><span>
                Work
              </span></button>
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/personal">
          <TodoContainer tableName="Personal" />
        </Route>

        <Route path="/work">
          <TodoContainer tableName="Work" />
        </Route>

        <Route path="*">
          <>
            <h1>404 Page not found</h1>
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
