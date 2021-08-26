import React from 'react'
export default function AddTodoForm(){

    return(
        <div>
            <form>
                <label htmlFor ="TodoTitle">Title</label>
                <input id ="TodoTitle"></input>
                <button type="submit">Add</button>
            </form>  
     
        </div>
    )



}
