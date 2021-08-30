import React from 'react'

const AddTodoForm = () => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        event.target.name;
        console.log(todoTitle)
        
    }
    return (
        <div>
        <form>
            <label htmlFor="todoTitle" >Title: </label>
            <input id="todoTitle" type="text" name="title"/>
            <button>Add</button>
        </form>
        </div>
    )
}

export default AddTodoForm