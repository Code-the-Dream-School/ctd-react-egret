import React from "react";

const todoList = [
	{
		id: 1,
		title: "Complete assignment for lesson 1.1",
	},
	{
		id: 2,
		title: "Commit and push to lesson-1-1 branch on GitHub",
	},
	{
		id: 3,
		title: "Submit pull request and merge on GitHub",
	},
	{
		id: 4,
		title: "Receive feedback and respond accordingly",
	},
];

const TodoList = () => (
	<ul>
		{todoList.map((item) => (
			<li key={item.id}>{item.title}</li>
		))}
	</ul>
);

export default TodoList;
