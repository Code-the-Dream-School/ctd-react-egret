import TodoListItem from './TodoListItem';
import PropTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo, onDoneTask, onRemoveAll }) => {

    function handleConfirmationBox() {
        const confirmBox = window.confirm('are you sure DELETE ALL?')
        if (confirmBox === true) {
            onRemoveAll(todoList)
        }
    }

    if (todoList.length === 0) {
        return (<h3>List is empty</h3>)
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
                <button onClick={() => handleConfirmationBox()}>REMOVE ALL</button>
            </main>
        )
    }
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func,
    onDoneTask: PropTypes.func,
    onRemoveAll: PropTypes.func
}

export default TodoList