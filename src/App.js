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
	const [todoEdit, setTodoEdit] = useState(null);

	const deleteTodo = (todoId) => {
		if (todoEdit.id === todoId) {
			setTodoEdit(null);
		}
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

	const updateTodo = (updatedTodo) => {
		const changedTodos = todos.map((todo) =>
			todo.id === updatedTodo.id ? updatedTodo : todo
		);
		setTodos(changedTodos);
		setTodoEdit(null);
	};

	return (
		<div className="container-fluid mt-4 align-items-center">
			<div className="row">
				<div className="col-4">
					<TodoList
						todos={todos}
						deleteTodo={deleteTodo}
						todoToogleCompleted={todoToogleCompleted}
						setTodoEdit={setTodoEdit}
					/>
				</div>
				<div className="col-4">
					<TodoForm
						addTodo={addTodo}
						todoEdit={todoEdit}
						updateTodo={updateTodo}
						setTodoEdit={setTodoEdit}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
