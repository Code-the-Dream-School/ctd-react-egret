import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SideBar.module.css";
import avatar from "../../img/avatar.jpg";

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

export const TodoCard = ({route, length, children}) => (
  <Link to={route}>
    <p className={styles.icon}>{children}</p>
    <h3>{route.slice(1)} Todo</h3>
    <p>{length} taskes</p>
  </Link>
);

SideBar.propTypes = {
  readingLength: PropTypes.number.isRequired,
  homeworkLength: PropTypes.number.isRequired,
};

TodoCard.propTypes = {
  route: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default SideBar;
