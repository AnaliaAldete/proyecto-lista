import { Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

export const Form = ({
	agregarTarea,
	descripcion,
	edit,
	setEdit,
	id,
	setArrayTareas,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data, e) => {
		if (!edit) {
			agregarTarea(data.descripcion);
		} else {
			setEdit(false);
			const nuevoArrayTareas = JSON.parse(
				localStorage.getItem("arrayTareas")
			).map((tarea) => {
				if (tarea.id === id) {
					return {
						...tarea,
						descripcion: e.target.descripcion.value,
					};
				} else {
					return tarea;
				}
			});
			setArrayTareas(nuevoArrayTareas);
			localStorage.setItem("arrayTareas", JSON.stringify(nuevoArrayTareas));
		}
		reset();
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{ display: "flex", gap: 15 }}
		>
			<TextField
				type="text"
				id="descripcion"
				label={!edit ? "Agregar una tarea" : "Editar tarea"}
				variant="filled"
				name="descripcion"
				defaultValue={descripcion}
				{...register("descripcion", {
					required: "Este campo es obligatorio",
					minLength: {
						value: 3,
						message: "La tarea debe tener al menos 3 caracteres",
					},
					maxLength: {
						value: 60,
						message: "La tarea no puede tener más de 60 caracteres",
					},
					pattern: {
						value: /\S/,
						message: "La tarea no puede contener espacios vacíos",
					},
				})}
				error={errors.descripcion ? true : false}
				helperText={errors.descripcion ? errors.descripcion.message : ""}
			/>
			<Stack direction="row" spacing={2}>
				{edit && (
					<Button variant="outlined" onClick={() => setEdit(false)}>
						Cancelar
					</Button>
				)}
				<Button variant="contained" type="submit">
					{!edit ? "Agregar" : "Editar"} Tarea
				</Button>
			</Stack>
		</form>
	);
};
