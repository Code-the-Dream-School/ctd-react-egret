import style from '../TodoListItem.module.css';
import PropTypes from "prop-types";
import { BsCheckLg } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc'

const TodoListItem = ({ todo, onRemoveTodo, onDoneTask }) => {
    return (
        <li className={style.ListItem}>
            <p>{todo.title}</p>
            <button className='bt-remove' type='button' onClick={() => onRemoveTodo(todo.id)}>REMOVE</button>
            <button className='radioInput' checked={todo.done} onClick={() => onDoneTask(todo.id, !todo.completed)}>{todo.completed ? <BsCheckLg /> : <FcCheckmark />}</button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.string,
    onRemoveTodo: PropTypes.func.isRequired,
    onDoneTask: PropTypes.func.isRequired
}

export default TodoListItem