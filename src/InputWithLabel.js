import React from 'react'

const InputWithLabel = ({ todoTitle, type = "text", handleTitleChange, children }) => {

    return (
        <>
            <label htmlFor="todoTitle" >{children}</label>
            <input
                type={type}
                value={todoTitle}
                onChange={handleTitleChange}
            />
        </>
    )
}

export default InputWithLabel
