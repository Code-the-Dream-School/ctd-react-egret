import React from 'react'

const AddTodoForm = (props) => {

    const handleAddTodo = (event) => {
        event.preventDefault();
        let titleTodo = event.target.title.value;
        props.onAddTodo(titleTodo)
        event.target.reset();
    }
    
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle" >Title: </label>
                <input id="todoTitle" type="text" name="title" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTodoForm
