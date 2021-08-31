import React from "react";

const AddTodoForm = (props) => {
	const handleAddTodo = (e) => {
		props.onAddTodo(e.target.title.value);
		e.target.reset();
		e.preventDefault();
	};

	return (
		<form onSubmit={handleAddTodo}>
			<label htmlFor='todoTitle'>Title: </label>
			<input id='todoTitle' name='title' type='text' />
			<button type='submit'>Add</button>
		</form>
	);
};

export default AddTodoForm;
