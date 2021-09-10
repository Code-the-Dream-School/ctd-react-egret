import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({todoList}) => (
  <ul>
    {todoList.map((item) => (
      <TodoListItem key={item.id} item={item} />
    ))}
  </ul>
);

export default TodoList;
