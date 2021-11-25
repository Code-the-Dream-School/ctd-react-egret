import {Link} from "react-router-dom";
import styles from "./Sidebar.module.css";
import avatar from "../img/avatar.jpg";

const TodoCard = ({route, length, children}) => (
  <Link to={route}>
    <p className={styles.icon}>{children}</p>
    <h3>{route.slice(1)} Todo</h3>
    <p>{length} taskes</p>
  </Link>
);

const SideBar = ({readingLength, homeworkLength}) => (
  <div className={styles.sideBar}>
    <img
      src={avatar}
      loading='lazy'
      alt='Avatar of Chung Kao'
      className={styles.avatar}
    />
    <h1>RemindMe&#8482;</h1>
    <nav className={styles.todoNav}>
      <ul>
        <li className={`${styles.todos} ${styles.readingCard}`}>
          <TodoCard route='/Reading' length={readingLength} key='1'>
            &#128214;
          </TodoCard>
        </li>
        <li className={`${styles.todos} ${styles.homeworkCard}`}>
          <TodoCard route='/Homework' length={homeworkLength} key='2'>
            &#128211;
          </TodoCard>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideBar;
