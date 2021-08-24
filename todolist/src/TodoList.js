import React from "react";

const todolist = [
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
        {todolist.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
