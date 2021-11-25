import styles from "./TodoContainer.module.css";
import {ReactComponent as Check} from "../img/check.svg";

const TodoListItem = ({item, listName, onRemoveTodo}) => (
  <li className={styles.todoItem}>
    <button
      className={styles.removeButton}
      type='button'
      onClick={() => onRemoveTodo(listName, item.id)}>
      <Check />
    </button>
    <span>{item.fields.Task}</span>
  </li>
);

export default TodoListItem;
