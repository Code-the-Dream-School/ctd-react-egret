import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const AddHomeworkTodoForm = ({
  onAddHomework,
  onRemoveHomework,
  homeworkList,
  children,
}) => (
  <div>
    <AddTodoForm onAddTodo={onAddHomework} home={children} />
    <hr />
    <h2>Homework List</h2>
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
      <TodoList todoList={homeworkList.data} onRemoveTodo={onRemoveHomework} />
    )}
  </div>
);

export default AddHomeworkTodoForm;
