import React from 'react';
function AddTodoForm(){
    return(
        <form>
            <label htmlfor="todoTitle">
                Title
                <input type="text" id="todoTitle"/>
                <button type="submit">Add</button>
                
            </label>
        </form>

    )
}
export default AddTodoForm;