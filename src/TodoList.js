import TodoListItem from "./TodoListItem";
import styles from "./AddTodosForm.module.css";

const TodoList = ({todoList, onRemoveTodo}) => (
  <ul className={styles.todoList}>
    {todoList.map((item) => (
      <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
    ))}
  </ul>
);

export default TodoList;
