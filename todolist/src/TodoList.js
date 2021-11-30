import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  //const { todoList } = props;
  return (
    <>
      <ul>
        {props.todoList.map((todoItem) => {
          return (
            <TodoListItem
              onRemoveTodo={props.onRemoveTodo}
              key={todoItem.id}
              todo={todoItem}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
