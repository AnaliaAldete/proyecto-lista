//ver error al escribir!!!

import {
	Stack,
	TextField,
	Button,
	// Select,
	// MenuItem,
	// FormControl,
	// InputLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";

export const Form = ({ agregarTarea, descripcion, edit, setEdit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		if (!edit) {
			agregarTarea(data.descripcion);
		} else {
			setEdit(false);
		}
		reset();
	};
	return (
		//<Stack spacing={10} direction="row">
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
		// 	{/* <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
		// 		<InputLabel id="demo-simple-select-label">
		// 			Seleccione un filtro
		// 		</InputLabel>
		// 		<Select label="Estado">
		// 			<MenuItem>Pendiente</MenuItem>
		// 			<MenuItem>Completada</MenuItem>
		// 			<MenuItem>Todas</MenuItem>
		// 		</Select>
		// 	</FormControl> */}
		// </Stack>
	);
};
