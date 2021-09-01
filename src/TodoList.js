import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 1,
    title: "Complete assignment for lesson 1.3",
  },
  {
    id: 2,
    title: "Commit and push to lesson-1-3 branch on GitHub",
  },
  {
    id: 3,
    title: "Submit pull request and merge on GitHub",
  },
  {
    id: 4,
    title: "Receive feedback and respond accordingly",
  },
];

const TodoList = () => (
  <ul>
    {todoList.map((item) => (
      <TodoListItem key={item.id} item={item} />
    ))}
  </ul>
);

export default TodoList;
