import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TodoContainer from './component/TodoContainer';
import styled from './App.module.css';
// import { style } from '@mui/system';

function App() {

  return (
    <BrowserRouter>
         <nav  >
                <ul className = {styled.nav}>
                      <li>
                      <Link to = "/list-1" className = {styled.link} >Personal</Link>
                      </li>
                      <li >
                      <Link className = {styled.link} to="/list-2">Work</Link>
                      </li>
                </ul>
          </nav>
            <div >
                <Switch>

                    <Route path='/list-1'>
                      <TodoContainer tableName="personal"/>
                    </Route>
                    <Route path="/list-2">
                      <TodoContainer  tableName="work"/>
                    </Route>       
              </Switch>
      </div>
    </BrowserRouter>
   
  );
}

export default App;