import React from "react";
import TodoListItem from "./TodoListItem";
const todolist = [
  {
    id: 1,
    title: "complete assignment",
  },

  {
    id: 2,
    title: "pull request",
  },

  {
    id: 3,
    title: "submit assignment",
  },
];

function TodoList() {
  return (
    <div>
      <ul>
        {todolist.map(function (item) {
          return (<TodoListItem key={item.id}todo={item}/>);
        })}
      </ul>
    </div>
  );
}
export default TodoList;
