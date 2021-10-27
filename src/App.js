import React from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import TodoContainer from './TodoContainer'

function App() {
  return (
    <BrowserRouter>

      <nav>
        <ul>
          <li>
            <Link to="/list-1">List 1</Link>
          </li>
          <li>
            <Link to="/list-2">List 2</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/list-1">
          <TodoContainer tableName="List 1" />
        </Route>

        <Route path="/list-2">
          <TodoContainer tableName="List 2" />
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
