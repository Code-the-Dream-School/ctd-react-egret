import React from 'react';


function AddTodoForm(props){
    function handleAddTodo(event){
        event.preventDefault();      
        let todoTitle = event.target.title.value
        props.onAddTodo("Sucefully added: "+ todoTitle)
        event.target.reset()
     }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle">Title</label>
                 <input id="todoTitle" name="title"></input>
                 <button type="submit" >Add</button>
            </form>
        </div>
    )
}


export default AddTodoForm ;
