import {Link} from "react-router-dom";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import styles from "./TodoContainer.module.css";

const TodoContainer = ({
  onAddTodo,
  onRemoveTodo,
  todoList,
  fetchStatus,
  children,
}) => (
  <div className={styles.listWrapper}>
    <div className={styles.homeButton}>
      <Link to='/'>Close</Link>
    </div>
    <h2>{children}</h2>
    {fetchStatus.isError && (
      <p>
        <strong>SOMETHING WENT WRONG:</strong>&nbsp;
        {fetchStatus.errMsg}
        {/* <strong>SOMETHING WENT WRONG:</strong>&nbsp;
          {fetchStatus.errMsg.error}--{fetchStatus.errMsg.message} */}
      </p>
    )}
    {fetchStatus.isLoading ? (
      <p>Loading ...</p>
    ) : (
      <TodoList
        todoList={todoList}
        listName={children}
        onRemoveTodo={onRemoveTodo}
      />
    )}
    <AddTodoForm listName={children} onAddTodo={onAddTodo} />
  </div>
);

export default TodoContainer;
