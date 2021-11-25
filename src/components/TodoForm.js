import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
	const [textForm, setTextForm] = useState({
		title: "",
		description: "",
	});
	const [error, setError] = useState(null);
	const [successMessage, setSuccessMesage] =
		useState(null);

	const handleChange = (e) => {
		const changedText = {
			...textForm,
			[e.target.name]: e.target.value,
		};
		setTextForm(changedText);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (textForm.title.trim() == "") {
			//.trim: elimina espacios vacios
			setError("Debe indicar un titulo");
			return;
		}
		if (textForm.description.trim() == "") {
			setError("Debe indicar una descripción");
			return;
		}
		addTodo(textForm);
		setTextForm({
			title: "",
			description: "",
		});
		setSuccessMesage("Agregado con exito");
		setTimeout(() => {
			setSuccessMesage(null);
		}, 1000);
		setError(null);
	};

	return (
		<div>
			<h1>Nueva Tarea</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					placeholder="Titulo"
					className="form-control"
					name="title"
					value={textForm.title}
					onChange={(e) => handleChange(e)}
				/>
				<textarea
					placeholder="Descripcion"
					className="form-control mt-2"
					name="description"
					value={textForm.description}
					onChange={(e) => handleChange(e)}
				/>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-d-block mt-2 "
					>
						Agregar tarea
					</button>
				</div>
			</form>
			{error && (
				<div className="alert alert-danger mt-2">
					{error}
				</div>
			)}
			{successMessage && (
				<div className="alert alert-success mt-2">
					{successMessage}
				</div>
			)}
		</div>
	);
};

export default TodoForm;
