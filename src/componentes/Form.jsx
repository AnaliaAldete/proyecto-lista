import {
	Stack,
	TextField,
	Button,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
} from "@mui/material";
import { useState } from "react";

export const Form = ({ agregarTarea }) => {
	const [tarea, setTarea] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		agregarTarea(tarea);
	};
	return (
		<Stack spacing={10} direction="row">
			<form onSubmit={handleSubmit}>
				<TextField
					id="tarea"
					label="Agregar una tarea"
					variant="filled"
					value={tarea}
					onChange={(e) => setTarea(e.target.value)} //ver lo del name
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
					<MenuItem value="pendiente">Pendiente</MenuItem>
					<MenuItem value="completada">Completada</MenuItem>
					<MenuItem value="todas">Todas</MenuItem>
				</Select>
			</FormControl>
		</Stack>
	);
};
