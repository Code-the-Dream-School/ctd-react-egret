import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import TodoContainer from './TodoContainer';


function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/work'>Work</Link>
                    </li>
                    <li>
                        <Link to='/personal'>Personal</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/work'>
                    <TodoContainer tableName='Work' />
                </Route>
                <Route path='/personal'>
                    <TodoContainer tableName='Personal' />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App
