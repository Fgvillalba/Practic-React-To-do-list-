import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({
	todos,
	deleteTodo,
	todoToogleCompleted,
	setTodoEdit,
}) => {
	return (
		<div>
			<h1 className="text-start">Todo List</h1>
			{todos.length === 0 ? (
				<div className="alert alert-primary">
					No hay tareas, agrega una.
				</div>
			) : (
				todos.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						deleteTodo={deleteTodo}
						todoToogleCompleted={todoToogleCompleted}
						setTodoEdit={setTodoEdit}
					/>
				))
			)}
		</div>
	);
};

export default TodoList;
