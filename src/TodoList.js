import TodoListItem from './TodoListItem';
  
  const TodoList = ({todoList}) => {
      return (
        <ul>
            {
              todoList.map((todo) => {
              return <TodoListItem key={todo.id} todo={todo} />
              })
            }
        </ul>
      )
  }

  export default TodoList