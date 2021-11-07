import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import styles from "./AddTodosForm.module.css";

const AddHomeworkTodoForm = ({
  onAddHomework,
  onRemoveHomework,
  homeworkList,
  children,
}) => (
  <div className={styles.todostWrapper}>
    <div className={styles.homeButton}>{children}</div>
    <div className={styles.listWrapper}>
      <h2>Homework</h2>
      {homeworkList.isError && (
        <p>
          <strong>SOMETHING WENT WRONG:</strong>&nbsp;
          {homeworkList.errMsg}
          {/* <strong>SOMETHING WENT WRONG:</strong>&nbsp;
          {todoList.errMsg.error}--{todoList.errMsg.message} */}
        </p>
      )}
      {homeworkList.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList
          todoList={homeworkList.data}
          onRemoveTodo={onRemoveHomework}
        />
      )}
      <AddTodoForm onAddTodo={onAddHomework} />
    </div>
  </div>
);

export default AddHomeworkTodoForm;
