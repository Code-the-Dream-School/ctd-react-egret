import React from "react"



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
            {
            todoList.map((i) => <li key={i.id}>{i.title}</li>)
            }
        </ul>
    )
}

export default TodoList;