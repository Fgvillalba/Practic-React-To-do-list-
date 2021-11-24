import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({
	todos,
	deleteTodo,
	todoToogleCompleted,
}) => {
	return (
		<div>
			<h1 className="text-end">Todo List</h1>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					deleteTodo={deleteTodo}
					todoToogleCompleted={todoToogleCompleted}
				/>
			))}
		</div>
	);
};

export default TodoList;
