import {Link} from "react-router-dom";
import PropTypes from "prop-types";
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
        {fetchStatus.errMsg.toString()}
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

TodoContainer.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      fields: PropTypes.objectOf(PropTypes.string),
    })
  ).isRequired,
  fetchStatus: PropTypes.exact({
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    errMsg: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }).isRequired,
  children: PropTypes.string.isRequired,
};

export default TodoContainer;
