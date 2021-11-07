import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import styles from "./AddTodosForm.module.css";

const AddReadingsTodoForm = ({
  onAddReading,
  onRemoveReading,
  readingList,
  children,
}) => (
  <div className={styles.todosWrapper}>
    <div className={styles.homeButton}>{children}</div>
    <div className={styles.listWrapper}>
      <h2>Reading</h2>
      {readingList.isError && (
        <p>
          <strong>SOMETHING WENT WRONG:</strong>&nbsp;
          {readingList.errMsg}
          {/* <strong>SOMETHING WENT WRONG:</strong>&nbsp;
          {todoList.errMsg.error}--{todoList.errMsg.message} */}
        </p>
      )}
      {readingList.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList todoList={readingList.data} onRemoveTodo={onRemoveReading} />
      )}
      <AddTodoForm onAddTodo={onAddReading} home={children} />
    </div>
  </div>
);

export default AddReadingsTodoForm;
