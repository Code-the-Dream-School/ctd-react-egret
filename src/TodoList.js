import TodoListItem from "./TodoListItem";
import styles from "./AddTodosAndForm.module.css";

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

export default TodoList;
