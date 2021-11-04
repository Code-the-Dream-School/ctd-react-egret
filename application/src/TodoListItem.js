

const TodoListItem = ({todo, onRemoveTodo}) => {
    console.log(todo)

    return (
           <li>
             <span>{todo.title}</span>
             <button type='button' onClick={() => onRemoveTodo(todo.id)}>Delete</button>     
           </li>
    )
}

export default TodoListItem;
