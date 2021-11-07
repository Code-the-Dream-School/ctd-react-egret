import styles from "./AddTodosForm.module.css";
import {ReactComponent as Check} from "./img/check.svg";

const TodoListItem = ({item, onRemoveTodo}) => (
  <li className={styles.todoItem}>
    <button
      className={styles.removeButton}
      type='button'
      onClick={() => onRemoveTodo(item.id)}>
      <Check />
    </button>
    <span>{item.fields.Title || item.fields.Task}</span>
  </li>
);

export default TodoListItem;
