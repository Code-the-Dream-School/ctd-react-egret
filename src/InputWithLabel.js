import React from 'react'

const InputWithLabel = ({ todoTitle, type = "text", handleTitleChange, children, hasFocus}) => {


    const inputRef = React.useRef();
    React.useEffect(() => {
        if (hasFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [hasFocus])

    return (
        <>
            <label htmlFor="todoTitle" >{children}</label>
            <input
                ref={inputRef}
                type={type}
                value={todoTitle}
                onChange={handleTitleChange}
                placeholder="Add Task"
            />
        </>
    )
}

export default InputWithLabel
