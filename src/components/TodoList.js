import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";
import styles from "./TodoContainer/TodoContainer.module.css";

const TodoList = ({todoList, listName, onRemoveTodo}) => (
  <ul className={styles.todoList}>
    {todoList.map((item) => (
      <TodoListItem
        key={item.id}
        item={item}
        listName={listName}
        onRemoveTodo={onRemoveTodo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      fields: PropTypes.objectOf(PropTypes.string),
      createdTime: PropTypes.string,
    })
  ).isRequired,
  listName: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
