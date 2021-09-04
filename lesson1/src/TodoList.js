import React from "react";
import TodoListItem from "./TodoListItem";



let todoList = [
    {
      id: 1,
      title: "Write Lesson 1.1 instructions"
    },
    {
      id: 2,
      title: "Submit pull request"
    },
    {
      id: 3,
      title: "Respond to introduction email"
    }
  ]

function TodoList(){
    return(
        <ul>
            {todoList.map(function(item) {
              return (
                <TodoListItem key={item.id} todo={item.title}/>
              )
            })}
        </ul>
    )
}

export default TodoList;