import React from 'react'

import TodoListItem from './TodoListItem'



     function TodoList({todoList}){
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