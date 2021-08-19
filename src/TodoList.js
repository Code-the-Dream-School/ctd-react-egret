import React from 'react';
const todoList = [
    {
      id:"1",
      title:"complete assignment",
    },
    {
      id:"2",
      title:"pull request",
    },
    {
      id:"3",
      title:"submit assignment",
  
    }
  ]
export default function TodoList(){

    return(
        <div>
              
      <ul>
        {
          todoList.map(function(item){
            return <li key={item.id}>{item.title}</li>;
        })}
        
      </ul>
        </div>
    )



}

  