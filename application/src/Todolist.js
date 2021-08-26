import React from 'react'

const todoList = [
    { id: 1,
      title: "Bye an apple",
    },
    { id: 2,
      title: "Bye a squash",
    },
    { id: 3,
      title: "Bye a beer",
    },
     ]

     const TodoList = () => {
        return (
            <ul>
                {
                  todoList.map((i) => <li key={i.id}>{i.title}</li>)
                }
         </ul>
        )
     }

 export default TodoList