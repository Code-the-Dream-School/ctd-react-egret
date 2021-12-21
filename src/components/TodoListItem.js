import style from '../TodoListItem.module.css';
import PropTypes from "prop-types";
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc';
import { RiDeleteBin6Line } from 'react-icons/ri'

const TodoListItem = ({ todo, onRemoveTodo, onDoneTask }) => {
    return (
        <li className={style.ListItem}>
            <p>{todo.title}</p>
            <div className='icons-container'>
                <button className='bt-remove' type='button' onClick={() => onRemoveTodo(todo.id)}><RiDeleteBin6Line style={{ color: 'red', fontSize: '1rem' }} /></button>
                <button className='radioInput' checked={todo.com} onClick={() => onDoneTask(todo.id, !todo.completed)}>{todo.completed ? <BsFillCheckSquareFill style={{ color: 'green', fontSize: '1rem' }} /> : <FcCheckmark style={{ fontSize: '1rem' }} />}</button>
            </div>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.string,
    onRemoveTodo: PropTypes.func.isRequired,
    onDoneTask: PropTypes.func.isRequired
}

export default TodoListItem