import React from 'react'

const AddTodoForm = ({onAddTodo}) => {

    const [todoTitle, setTodoTitle] = React.useState('')
    
    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo(
            {
                title: todoTitle,
                id: Date.now()
            }
        )
        setTodoTitle("")
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle" >Title: </label>
                <input
                title="title" 
                type="text" 
                value={todoTitle}
                onChange={handleTitleChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm
