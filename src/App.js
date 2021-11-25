import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const localTodos = JSON.parse(
	localStorage.getItem("todos") //obtengo los todos del local storage, en el LS los todos son un string por eso hay que parsearlo
);

const App = () => {
	const [todos, setTodos] = useState(localTodos || []);
	const [todoEdit, setTodoEdit] = useState(null);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos)); //grabo los todos como un string en el LS
	}, [todos]);

	const deleteTodo = (todoId) => {
		if (todoEdit && todoEdit.id === todoId) {
			// si todoEdit esta en null rompe, entonces hay que hacer ese if condicional a todoEdit
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
