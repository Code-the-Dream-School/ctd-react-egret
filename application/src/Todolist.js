import React from 'react'

import TodoListItem from './TodoListItem'

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

     function TodoList(){
      return (
          <div>
               <ul>
          {todoList.map((todo)=>{
            return <TodoListItem key={todo.id} todo={todo}/>
          })}
        </ul> 
  
          </div>
      )
  }  

 export default TodoList;