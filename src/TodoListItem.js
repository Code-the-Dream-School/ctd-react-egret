import style from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo, onDoneTask }) => {
    return (
        <li className={style.ListItem}>
            <span>{todo.todoDate}</span>
            <p>{todo.title}</p>
            <button className='bt-remove' type='button' onClick={() => onRemoveTodo(todo.id)}>REMOVE</button>
            <input className='radioInput' checked={todo.done} type='radio' onChange={() => onDoneTask(todo.id)} />
        </li>
    )
}

export default TodoListItem