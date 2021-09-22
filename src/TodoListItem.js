import React from 'react';


function TodoListItem(props){

    return(
        <div>
             <li>
             {props.todo.title}
          </li>
        </div>
    )

}

export default TodoListItem;