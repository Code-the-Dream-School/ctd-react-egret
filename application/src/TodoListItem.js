const TodoListItem = ({todo, onRemoveTodo}) => {
  return (
    <li>
      <span><input type="checkbox" class="checkbox" />{todo.fields.Title} </span>
      <button type='button' onClick={() => onRemoveTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoListItem;
