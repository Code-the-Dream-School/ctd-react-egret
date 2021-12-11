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
                      <Link to = "/list-1" className = {styled.link} >List 1</Link>
                      </li>
                      <li >
                      <Link className = {styled.link} to="/list-2">List 2</Link>
                      </li>
                </ul>
          </nav>
            <div >
                <Switch>

                    <Route path='/list-1'>
                      <TodoContainer tableName="List 1"/>
                    </Route>
                    <Route path="/list-2">
                      <TodoContainer  tableName="List 2"/>
                    </Route>
                     <Route path ="*">
                    {/* <>
                            <h1 className= { styled.note}> 404 Page not found </h1>
                          </> */}
                    </Route>
              </Switch>
      </div>
    </BrowserRouter>
   
  );
}

export default App;