import React from 'react'
import PropTypes from "prop-types";

const InputWithLabel = ({ todoTitle, type = "text", handleTitleChange, children, hasFocus }) => {


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

InputWithLabel.propTypes = {
    todoTitle: PropTypes.string,
    type: PropTypes.string,
    handleTitleChange: PropTypes.func.isRequired,
    children: PropTypes.object,
    hasFocus: PropTypes.bool
}

export default InputWithLabel
