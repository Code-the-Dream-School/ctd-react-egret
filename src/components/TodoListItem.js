import PropTypes from "prop-types";
import styles from "./TodoContainer/TodoContainer.module.css";
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

TodoListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    fields: PropTypes.objectOf(PropTypes.string),
    createTime: PropTypes.string,
  }).isRequired,
  listName: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
