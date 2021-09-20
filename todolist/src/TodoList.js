import React from "react";
import TodoListItem from "./TodoListItem";


function TodoList(props) {
  const { todoList } = props;
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
