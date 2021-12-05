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
    <li id={"li" + todo.id}>
      <span id={"todo" + todo.id} className="regular"><input type="checkbox" className="checkbox" onClick={(e)=>CrossedOut(e, todo.id)} />{todo.fields.Title} </span>
      <button type='button' onClick={() => onRemoveTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoListItem;
