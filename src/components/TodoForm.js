import React, { useState, useEffect } from "react";

const TodoForm = ({
	addTodo,
	todoEdit,
	updateTodo,
	setTodoEdit,
}) => {
	const [textForm, setTextForm] = useState({
		title: "",
		description: "",
	});
	const [error, setError] = useState(null);
	const [successMessage, setSuccessMesage] =
		useState(null);

	useEffect(() => {
		if (todoEdit) {
			setTextForm(todoEdit);
		} else {
			setTextForm({
				title: "",
				description: "",
			});
		}
	}, [todoEdit]);

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

		if (todoEdit) {
			updateTodo(textForm);
		} else {
			addTodo(textForm);
		}

		setSuccessMesage(
			`${
				todoEdit
					? "Editado con exito"
					: "Agregado con exito"
			}`
		);
		setTextForm({
			title: "",
			description: "",
		});
		setTimeout(() => {
			setSuccessMesage(null);
		}, 1000);
		setError(null);
	};

	return (
		<div>
			<h2 className="text-center display-5">
				{todoEdit ? "Editar tarea" : "Nueva tarea"}
			</h2>
			{todoEdit && (
				<button
					onClick={() => setTodoEdit(null)}
					className="btn btn-sm btn-warning mb-2"
				>
					Cancelar edicion
				</button>
			)}
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
						{todoEdit
							? "Actualizar tarea"
							: "Agregar tarea"}
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
