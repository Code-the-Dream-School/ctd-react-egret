import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  const { todoList } = props;
  return (
    <>
      <ul>
        {todoList.map((todoItem) => {
          return <TodoListItem key={todoItem.id} todo={todoItem} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;
