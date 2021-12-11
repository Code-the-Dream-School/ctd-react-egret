import React , { useState } from 'react'
import styles from './TodoListItem.module.css';
import { AiFillDelete } from "react-icons/ai";
function TodoListItem({ todo, onRemoveTodo }) {
    console.log({ todo })
    const [ checked, setChecked] = useState({ labelChecked: false});
    const labelRef = React.createRef();
    const handleClick = e => {
        if (checked.labelChecked === false) {
          labelRef.current.style.textDecoration = "line-through";
        } else {
          labelRef.current.style.textDecoration = "none";
        }
        setChecked({ labelChecked: !checked.labelChecked });
      };
    return (
        <div >
        <li className={styles.ListItem}>
          {/*<input type="checkbox" checked={checked} onChange={onHandleChecked}className={style.checkbox1}  />*/}
  
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
        
            // <li className = { styles.listItem }>
            //     {todo.fields.Title}
            //     <button onClick={() => onRemoveTodo(todo.id)} type="button">Remove</button>
            // </li>


        
    )
}


export default TodoListItem
