import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onRemoveTodo, onDoneTask, onRemoveAll }) => {
    if(todoList.length === 0) {
        return (<h1>List is empty</h1>)
    } else {
        return (
            <main className='container'>
                <ul>
                    {
                        todoList.map((todo) => {
                            return <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onDoneTask={onDoneTask} />
                        })
                    }
                </ul>
                <button onClick={() => onRemoveAll(todoList)}>REMOVE ALL</button>
            </main>
        )
    }
}

export default TodoList