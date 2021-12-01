import style from '../TodoListItem.module.css';
import PropTypes from "prop-types";

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

TodoListItem.propTypes = {
    todo: PropTypes.string,
    onRemoveTodo: PropTypes.func.isRequired,
    onDoneTask: PropTypes.func.isRequired
}

export default TodoListItem