import styles from './TodoListItem.module.css'
import PropTypes from 'prop-types';

const TodoListItem = ({todo, onRemoveTodo}) => {

  const CrossedOut = (e, id)=>{
    const checkbox = e.target;
    const crossText = document.querySelector(`#todo${id}`)
    const li = document.querySelector(`#li${id}`)
    if (checkbox.checked){
      crossText.classList.add("crossed-out")
      li.style.background = 'rgb(120, 160, 172)'
    } else {
      crossText.classList.remove("crossed-out")
      li.style.background = 'rgb(83, 125, 138)'
    }
  }

  return (
    <li id={"li" + todo.id} className={styles.ListItem}>
      <span id={"todo" + todo.id} className=""><input type="checkbox" onClick={(e)=>CrossedOut(e, todo.id)} />{todo.fields.Title} </span>
      <div>
      <span style={{marginRight: '15px'}}>{todo.fields.Date}</span>
      <button type='button' onClick={() => onRemoveTodo(todo.id)}>Delete</button>
      </div>
    </li>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func
};

export default TodoListItem;
