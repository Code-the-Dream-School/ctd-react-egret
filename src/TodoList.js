import TodoListItem from './TodoListItem';
  
  const TodoList = ({todoList, onRemoveTodo}) => {
      return (
        <ul>
            {
              todoList.map((todo) => {
              return <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/>
              })
            }
        </ul>
      )
  }

  export default TodoList