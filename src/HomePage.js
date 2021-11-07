import {Link} from "react-router-dom";
import avatar from "./img/avatar.jpg";

const ReadingCard = ({children}) => (
  <Link to='/reading'>
    <p className='icon'>&#128214;</p>
    <h3>Reading Todo</h3>
    <p>{children} taskes</p>
  </Link>
);

const HomeworkCard = ({children}) => (
  <Link to='/homework'>
    <p className='icon'>&#128211;</p>
    <h3>Homework Todo</h3>
    <p>{children} taskes</p>
  </Link>
);

const HomePage = ({readingCount, homeworkCount}) => (
  <div className='homePage'>
    <img src={avatar} loading='lazy' alt='Avatar of Chung Kao' class='avatar' />
    <h1>RemindMe&#8482;</h1>
    <nav className='todoNav'>
      <ul>
        <li className='todos readingCard'>
          <ReadingCard>{readingCount}</ReadingCard>
        </li>
        <li className='todos homeworkCard'>
          <HomeworkCard>{homeworkCount}</HomeworkCard>
        </li>
      </ul>
    </nav>
  </div>
);

export default HomePage;
