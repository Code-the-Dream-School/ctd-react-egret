import style from '../TodoListItem.module.css';
import PropTypes from "prop-types";
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc';
import { RiDeleteBin6Line } from 'react-icons/ri'

const TodoListItem = ({ todo, onRemoveTodo, onDoneTask }) => {
    return (
        <li className={style.ListItem}>
            <p>{todo.title}</p>
            <button className='bt-remove' type='button' onClick={() => onRemoveTodo(todo.id)}><RiDeleteBin6Line style={{color: 'red'}}/></button>
            <button className='radioInput' checked={todo.com} onClick={() => onDoneTask(todo.id, !todo.completed)}>{todo.completed ? <BsFillCheckSquareFill style={{color: 'green'}}/> : <FcCheckmark />}</button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.string,
    onRemoveTodo: PropTypes.func.isRequired,
    onDoneTask: PropTypes.func.isRequired
}

export default TodoListItem