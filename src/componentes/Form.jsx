import {
	Stack,
	TextField,
	Button,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
} from "@mui/material";

export const Form = () => {
	return (
		<Stack spacing={10} direction="row">
			<form>
				<TextField id="tarea" label="Agregar una tarea" variant="filled" />
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

			{/* <FormControl>
				<InputLabel htmlFor="input-tarea">Ingrese una tarea</InputLabel>
				<Input id="input-tarea" aria-describedby="my-helper-text" />
				<FormHelperText id="my-helper-text">
					La tarea no debe superar los 60 caracteres
				</FormHelperText>
			</FormControl>
			<FormControl>
				<InputLabel htmlFor="input-tarea">Ingrese una tarea</InputLabel>
				<Input id="input-tarea" aria-describedby="my-helper-text" />
				<FormHelperText id="my-helper-text">
					La tarea no debe superar los 60 caracteres
				</FormHelperText>
			</FormControl> */}
		</Stack>
	);
};
