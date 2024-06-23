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
			style={{ display: "flex", gap: 15, width: "100%" }}
		>
			<Stack
				direction={edit ? { xs: "column", sm: "row" } : "row"}
				spacing={2}
				sx={{ width: "100%" }}
			>
				<TextField
					type="text"
					id="descripcion"
					label={!edit ? "Agregar una tarea" : "Editar tarea"}
					variant="filled"
					name="descripcion"
					defaultValue={descripcion}
					fullWidth
					sx={{
						"& .MuiFilledInput-root": {
							backgroundColor: "#f0f0f0",
							"&:hover": {
								backgroundColor: "#f0f0f0",
							},
							"&.Mui-focused": {
								backgroundColor: "#f0f0f0",
							},
							"&.Mui-focused:before": {
								borderBottomColor: "#14213d",
							},
							"&:after": {
								borderBottomColor: "#14213d",
								backgroundColor: "#f0f0f0",
							},
						},
						"& .MuiInputLabel-root": {
							color: "#14213d",
							"&.Mui-focused": {
								color: "#14213d",
							},
						},
					}}
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
						<Button
							variant="outlined"
							size="small"
							sx={{
								maxHeight: "56px",
								borderColor: "#14213d",
								color: "#14213d",
								"&:hover": {
									borderColor: "#14213d",
								},
								flex: 1,
							}}
							onClick={() => setEdit(false)}
						>
							Cancelar
						</Button>
					)}
					<Button
						variant="contained"
						type="submit"
						size="small"
						sx={{
							maxHeight: "56px",
							backgroundColor: "#14213d",
							color: "#f9cc83",
							"&:hover": {
								backgroundColor: "#fca311",
								color: "#14213d",
								border: "solid 1px #14213d",
							},
							flex: 1,
							fontWeight: "bold",
						}}
					>
						{!edit ? "Agregar" : "Editar"}
					</Button>
				</Stack>
			</Stack>
		</form>
	);
};
