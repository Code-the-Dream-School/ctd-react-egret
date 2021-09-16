// import React from 'react';
import React, { useState } from 'react';

function AddTodoForm({onAddTodo}){
    const [todoTitle , setTodoTitle ] = useState([])

         
    function handleTitleChange(event){
         const newTodoTitle = event.target.value;
         setTodoTitle(newTodoTitle)
    }

    function handleAddTodo(event){
        event.preventDefault();      
        onAddTodo({title: todoTitle, id: Date.now()})
        // event.target.reset()
        setTodoTitle("")
     }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle">Title</label>
                <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange }></input>
                 <button type="submit" >Add</button>                                    
</form>
        </div>
    )
}


export default AddTodoForm ;
