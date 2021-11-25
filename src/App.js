import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todo1 = {
	id: 1,
	title: "Todo #1",
	description: "Desc del Todo #1",
	complete: false,
};

const todo2 = {
	id: 2,
	title: "Todo #2",
	description: "Desc del Todo #2",
	complete: true,
};

const initialTodos = [todo1, todo2];

const App = () => {
	const [todos, setTodos] = useState(initialTodos);

	const deleteTodo = (todoId) => {
		const changedTodos = todos.filter(
			(todo) => todo.id !== todoId
		);
		setTodos(changedTodos);
	};

	const todoToogleCompleted = (todoId) => {
		const changedTodos = todos.map((todo) => {
			return todo.id === todoId
				? { ...todo, complete: !todo.complete }
				: todo;
		});
		setTodos(changedTodos);
	};

	const addTodo = (todo) => {
		const newTodo = {
			...todo,
			id: Date.now(),
			complete: false,
		};
		setTodos([newTodo, ...todos]);
	};

	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-8">
					<TodoList
						todos={todos}
						deleteTodo={deleteTodo}
						todoToogleCompleted={todoToogleCompleted}
					/>
				</div>
				<div className="col-4">
					<TodoForm addTodo={addTodo} />
				</div>
			</div>
		</div>
	);
};

export default App;
