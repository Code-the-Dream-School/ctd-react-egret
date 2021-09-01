import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 1,
    title: "buy groceries",
  },
  {
    id: 2,
    title: "go to the gym",
  },
  {
    id: 3,
    title: "clean the house",
  },
];

function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map(function (todoItem) {
          return <TodoListItem key={todoItem.id} todo={todoItem}/>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
