//ver error al escribir!!!

import {
	Stack,
	TextField,
	Button,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";

export const Form = ({ agregarTarea }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		agregarTarea(data.descripcion);
		reset();
	};
	return (
		<Stack spacing={10} direction="row">
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					type="text"
					id="descripcion"
					label="Agregar una tarea"
					variant="filled"
					name="descripcion"
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
						pattern: /\S/,
					})}
					error={errors.descripcion ? true : false}
					helperText={errors.descripcion ? errors.descripcion.message : ""}
				/>
				<Button variant="contained" type="submit">
					Agregar Tarea
				</Button>
			</form>
			<FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
				<InputLabel id="demo-simple-select-label">
					Seleccione un filtro
				</InputLabel>
				<Select label="Estado">
					<MenuItem>Pendiente</MenuItem>
					<MenuItem>Completada</MenuItem>
					<MenuItem>Todas</MenuItem>
				</Select>
			</FormControl>
		</Stack>
	);
};
