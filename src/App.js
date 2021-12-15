import React from 'react'
import { BrowserRouter, Switch, Route, NavLink, } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import Nav from 'react-bootstrap/Nav'
import taskImage from './todolist7.png'
import './style.css';
// import ListContainer from './ListContainer';


function App() {
    return (
        <BrowserRouter>
            <div className='main'>
                <Nav>
               <img src={taskImage} alt='logo' style={{ position: 'relative', right: '-40px', padding: '5px', marginBottom: '40px'}}/>
                    <ul className='navItems'>
                        <li activeClassName="active">
                            <NavLink  to='/work'>Work</NavLink>
                        </li>
                        <li activeClassName="active">
                            <NavLink to='/personal'>Personal</NavLink>
                        </li>
                        <li activeClassName="active">
                            <NavLink to='/education'>Education</NavLink>
                        </li>
                        {/* <li><ListContainer /></li> */}
                    </ul>
                    
                </Nav>
                <Switch>
                    <Route path='/work'>
                        <TodoContainer tableName='Work' />
                    </Route>
                    <Route path='/personal'>
                        <TodoContainer tableName='Personal' />
                    </Route>
                    <Route path='/education'>
                        <TodoContainer tableName='Education' />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App
