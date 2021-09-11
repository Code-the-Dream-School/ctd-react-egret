import React from "react";

function TodoListItem (props) {
    console.log(props);
    
    return (
        <li>{props.todo.title}</li>
    );
}

export default TodoListItem;