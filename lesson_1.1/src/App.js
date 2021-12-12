import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import style from './App.module.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CTDimg from './img/CTD.png'
import Toggle from "./Toggle";



function App() {
  return (
    <BrowserRouter>
    <div className={style.App}></div>
      <nav >
      <div>
        <Toggle/>
      </div>
        <ul className={style.navUl}>
          <li className={style.navLi}> 
            <Link to="/" className={style.navHref}><HomeRoundedIcon color="primary"/>Home</Link>
          </li>
          <li className={style.navLi}>
            <Link to="/list-1" className={style.navHref}><SchoolRoundedIcon color="primary"/>CTD</Link>
          </li>

          <li className={style.navLi}>
            <Link to="/list-2" className={style.navHref}><VolunteerActivismRoundedIcon  color="primary"/>Mentor</Link>
          </li>
          <li className={style.navLi}>
            <Link to="/list-3" className={style.navHref}><PersonRoundedIcon  color="primary"/>Personal</Link>
          </li>
        </ul>
        
      </nav>
  

      <Switch>
        
        <Route  path="/list-1">
          <TodoContainer tableName="CTD"/>
        </Route>
        <Route path="/list-2">
        <TodoContainer tableName="Mentor"/>
        </Route>
        <Route path="/list-3">
        < TodoContainer tableName="Personal"/>
        </Route>
        <Route path="/">
          <p>select a list...</p>
          <div className="CTDimg">
      <a target="_blank" href="CTD.png">
        <img  className={style.CTDimg} src={CTDimg} alt="headerimg"   />
        </a>
        </div>
        </Route>
      </Switch>
    
    </BrowserRouter>
  
  );
}
export default App;
