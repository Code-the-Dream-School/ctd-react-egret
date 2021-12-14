import React, { useState } from 'react'
import styles from './TodoListItem.module.css';
import { AiFillDelete } from "react-icons/ai";
import PropTypes from 'prop-types';
function TodoListItem({ todo, onRemoveTodo }) {
  const [checked, setChecked] = useState({ labelChecked: false });
  const labelRef = React.createRef();
  const handleClick = e => {
    if (checked.labelChecked === false) {
      labelRef.current.style.textDecoration = "line-through";
    } else {
      labelRef.current.style.textDecoration = "none";
    }
    setChecked({ labelChecked: !checked.labelChecked });
  };
  TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func
  }
  return (
    <div >
      <li className={styles.ListItem}>
        <label ref={labelRef} htmlFor="strikethrough">
          <input type="checkbox" id="strikethrough" name="strikethrough" onClick={handleClick} className={styles.checkbox1} />
          &nbsp;&nbsp;
          {todo.fields.Title}
        </label>
        <button className={styles.removeButton} type="button" onClick={() => onRemoveTodo(todo.id)}>
          <AiFillDelete size={20} style={{ fill: 'brown' }} />
        </button>
      </li>
    </div>
  )
}


export default TodoListItem
