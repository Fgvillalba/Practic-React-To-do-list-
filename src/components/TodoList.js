import React from "react";
import Todo from "./Todo";

const todo1 = {
	title: "Todo #1",
	description: "Desc del Todo #1",
	complete: false,
};

const todo2 = {
	title: "Todo #2",
	description: "Desc del Todo #2",
	complete: true,
};

const todoList = [todo1, todo2];

const TodoList = () => {
	return (
		<div>
			<h1 className="text-end">Todo List</h1>
			{todoList.map((todo) => (
				<Todo todo={todo} />
			))}
		</div>
	);
};

export default TodoList;
