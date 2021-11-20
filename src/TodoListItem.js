import React from 'react'

function TodoListItem({ todo, onRemoveTodo }) {
    // console.log({ todo })
    return (

        <>
            <li>
                {todo.fields.Title}
                <button onClick={() => onRemoveTodo(todo.id)} type="button">Remove</button>
            </li>

        </>
    )
}


export default TodoListItem
