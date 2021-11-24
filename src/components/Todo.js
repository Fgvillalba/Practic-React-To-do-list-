import React from "react";

const Todo = ({
	todo,
	deleteTodo,
	todoToogleCompleted,
}) => {
	return (
		<div className="card mt-2">
			<div className="card-body">
				<h3 className="card-title text-end">
					{todo.title}
					<button
						className={`btn btn-sm ${
							todo.complete
								? "btn-outline-success"
								: "btn-success"
						}  ms-2`}
						onClick={() => todoToogleCompleted(todo.id)}
					>
						{todo.complete ? "Terminado" : "Terminar"}
					</button>
				</h3>
				<p className="card-text text-end">
					{todo.description}
				</p>
				<hr />
				<div className="d-flex justify-content-end ">
					<button className="btn btn-sm btn-outline-primary me-2">
						Editar
					</button>
					<button
						className="btn btn-sm btn-outline-danger"
						onClick={() => deleteTodo(todo.id)}
					>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Todo;
