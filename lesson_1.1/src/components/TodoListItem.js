import React from "react";
import style from './TodoListItem.module.css'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PropTypes from 'prop-types'


function TodoListItem({ todo, onRemoveTodo }) {
  console.log({ todo });
  return (
    <div>
      <li className={style.ListItem} >
        <input type='checkbox' fontSize='medium' className={style.CheckBox}/> 
      <span className={ todo.fields.completed===true? style.CompletedListItem:''}>
      {todo.fields.Title}
      </span>
        <button 
        className={style.RmvButton} 
        type="button" onClick={() => onRemoveTodo(todo.id)} >
          <RemoveCircleIcon  color='primary' fontSize='medium'/>
        </button>
      </li>
    </div>
  );
}
TodoListItem.prototype = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func
}
export default TodoListItem;
