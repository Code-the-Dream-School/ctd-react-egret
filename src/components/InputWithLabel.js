import React, { useRef } from 'react'
import PropTypes from 'prop-types'

function InputWithLabel({ todoTitle, handleTitleChange }) {
    const inputRef = useRef(null);
    React.useEffect(() => {
        if (inputRef) {
            inputRef.current.focus();
        }
    });

    return (
        <>
            <label htmlFor='todoTitle'>{todoTitle.children}</label>
            <input
                onChange={handleTitleChange}
                value={todoTitle}
                id='todoTitle'
                type='text'
                name='title'
                ref={inputRef}
            />
        </>
    );
}

InputWithLabel.propTypes = {
    todoTitle: PropTypes.string,
    handleTitleChange: PropTypes.func,
}

export default InputWithLabel;