import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({todoList, onRemoveTodo}){
    console.log(todoList)
  return (
    <div>
      <ul>
        {todoList.map((todo)=>{
          return <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}
          />
        })}
      </ul> 
    </div>
  )
}  

export default TodoList;