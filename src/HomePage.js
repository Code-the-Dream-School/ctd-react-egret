import {Link} from "react-router-dom";
import avatar from "./img/avatar.jpg";

// const ReadingCard = ({children}) => (
//   <Link to='/reading'>
//     <p className='icon'>&#128214;</p>
//     <h3>Reading Todo</h3>
//     <p>{children} taskes</p>
//   </Link>
// );

const TodoCard = ({route, length, children}) => (
  <Link to={route}>
    <p className='icon'>{children}</p>
    <h3>{route.slice(1)} Todo</h3>
    <p>{length} taskes</p>
  </Link>
);

const HomePage = ({readingLength, homeworkLength}) => (
  <div className='homePage'>
    <img
      src={avatar}
      loading='lazy'
      alt='Avatar of Chung Kao'
      className='avatar'
    />
    <h1>RemindMe&#8482;</h1>
    <nav className='todoNav'>
      <ul>
        <li key='1' className='todos readingCard'>
          <TodoCard route='/Reading' length={readingLength}>
            &#128214;
          </TodoCard>
        </li>
        <li key='2' className='todos homeworkCard'>
          <TodoCard route='/Homework' length={homeworkLength}>
            &#128211;
          </TodoCard>
        </li>
      </ul>
    </nav>
  </div>
);

export default HomePage;
