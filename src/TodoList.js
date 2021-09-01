import React from 'react';
import TodoListItem from "./TodoListItem";
const todoList = [
    {
      id:"1",
      title:"complete assignment"
    },
    {
      id:"2",
      title:"pull request"
    },
    {
      id:"3",
      title:"submit assignment"
    }
  ]

 function TodoList(){

    return(
        
            <ul>
            {
              todoList.map((todo)=>{
               return <TodoListItem key={todo.id} item={todo} />
                 
              })
            }
              
            </ul>  
     
    )

}

  export default TodoList;