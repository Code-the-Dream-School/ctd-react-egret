import {Link} from "react-router-dom";
import avatar from "./img/avatar.jpg";

const TodoCard = ({route, length, children}) => (
  <Link to={route}>
    <p className='icon'>{children}</p>
    <h3>{route.slice(1)} Todo</h3>
    <p>{length} taskes</p>
  </Link>
);

const SideBar = ({readingLength, homeworkLength}) => (
  <div className='sideBar'>
    <img
      src={avatar}
      loading='lazy'
      alt='Avatar of Chung Kao'
      className='avatar'
    />
    <h1>RemindMe&#8482;</h1>
    <nav className='todoNav'>
      <ul>
        <li className='todos readingCard'>
          <TodoCard route='/Reading' length={readingLength} key='1'>
            &#128214;
          </TodoCard>
        </li>
        <li className='todos homeworkCard'>
          <TodoCard route='/Homework' length={homeworkLength} key='2'>
            &#128211;
          </TodoCard>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideBar;
