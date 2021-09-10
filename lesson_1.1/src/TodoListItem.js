import React from 'react'

function TodoListItem(props) {
    console.log(props)
    return (
        <div>
           <li key={props.todo.id}>{props.todo.title}</li> 
        </div>
    )
}

export default TodoListItem
