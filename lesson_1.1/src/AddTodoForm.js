import React from 'react';
import TodoList from './TodoList';
function AddTodoForm() {
    return(
        <div>
            <form>
               <label>Title: </label> 
               <input id="todoTitle"></input>
               <label htmlFor="todoList"></label>
               <button type="submit">Add</button>
            </form>
        </div>

    )

}




export default AddTodoForm;