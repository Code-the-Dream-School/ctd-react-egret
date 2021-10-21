import React from 'react'

const InputWithLabel = ({todoTitle, type="text", isFocused, handleTitleChange, children }) => {

    const inputRef = React.useRef(null);

    React.useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <>
            <label htmlFor="todoTitle" >{children}</label>
            <input
            type={type}
            value={todoTitle}
            onChange={handleTitleChange}
            ref={inputRef}
            /> 
        </>
    )
}

export default InputWithLabel