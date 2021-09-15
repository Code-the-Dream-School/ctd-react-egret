import React from "react";
import TodoListItem from "./TodoListItem";


function TodoList({todoList}) {
  return (
    <div>
      <ul>
        {todoList.map(function (item) {
          return (<TodoListItem key={item.id} todo={item}/>);
        })}
      </ul>
    </div>
  );
}
export default TodoList;
