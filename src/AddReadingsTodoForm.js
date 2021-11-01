import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const AddReadingsTodoForm = ({
  onAddReading,
  onRemoveReading,
  readingList,
  children,
}) => (
  <div>
    <AddTodoForm onAddTodo={onAddReading} home={children} />
    <hr />
    <h2>Readings List</h2>
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
  </div>
);

export default AddReadingsTodoForm;
