import React from 'react'
import TodoListItem from './TodoListItem'



/* const renderList = (list) => {
  return list.map(item => <li key={item.id}>{item.title}</li>)
} */

function TodoList(props) {
  return (
    <ul>
      {props.list.map(todo => <TodoListItem key={todo.id} item = {todo} />
      )}
    </ul>
  )
}

export default TodoList