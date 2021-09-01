import React from 'react'
import TodoListItem from './TodoListItem'


function TodoList(props) {
  
  return (
    <ul>
      {props.list.map(todo => <TodoListItem key={todo.id} todo = {todo} />
      )}
    </ul>
  )
}


export default TodoList