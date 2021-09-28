import React from "react";

function InputWithLabel({todoTitle, handleTitleChange}){
    return(
        <> 
        <div>
        <label htmlFor="todoTitle">Title</label>
        <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange }></input>
        </div>
        </>
    )
}

export default InputWithLabel;