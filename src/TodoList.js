import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [{
    id: 1,
    title: "Go to gym"
  },
  {
    id: 2,
    title: "Read books"
  },
  {
    id: 3,
    title: "Listen Music"
  },{
    id: 4,
    title: "Play Video Games"
  },
  {
    id: 5,
    title: "Watch Sport"
  }
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