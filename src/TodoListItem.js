import React from 'react'

function TodoListItem({todo,onRemoveTodo}) {
    console.log({todo})
    return (
        <div>
        <li key={todo.id}>{todo.title}</li>

        </div>
    )
}

export default TodoListItem
