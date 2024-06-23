import "./App.css";
import {
	Stack,
	Typography,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
} from "@mui/material";
import { Tarea } from "./componentes/Tarea";
import { Form } from "./componentes/Form";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [arrayTareas, setArrayTareas] = useState(
		JSON.parse(localStorage.getItem("arrayTareas")) || [
			{ id: uuidv4(), descripcion: "Tarea de ejemplo", check: false },
		]
	);
	const [filtro, setFiltro] = useState("Todas");

	useEffect(() => {
		localStorage.setItem("arrayTareas", JSON.stringify(arrayTareas));
	}, [arrayTareas]);

	const handleArrayTareas = (descripcionTarea) => {
		const nuevaTarea = {
			id: uuidv4(),
			descripcion: descripcionTarea,
			check: false,
		};
		setArrayTareas([...arrayTareas, nuevaTarea]);
	};

	const handleCheckTarea = (id) => {
		const nuevasTareas = arrayTareas.map((tarea) =>
			tarea.id === id ? { ...tarea, check: !tarea.check } : tarea
		);
		setArrayTareas(nuevasTareas);
	};

	const eliminarTarea = (id) =>
		setArrayTareas(arrayTareas.filter((tarea) => tarea.id !== id));

	const handleFiltro = (e) => {
		setFiltro(e.target.value);
	};

	const tareasFiltradas = arrayTareas.filter((tarea) => {
		if (filtro === "Todas") return true;
		else if (filtro === "Pendiente") return !tarea.check;
		else if (filtro === "Completa") return tarea.check;
		else return true;
	});

	return (
		<Stack
			spacing={3}
			alignItems={"center"}
			p={3}
			minHeight={"100vh"}
			sx={{
				backgroundImage: "url(/img/fondo1.png)",
			}}
		>
			<Typography
				variant="h3"
				component="h1"
				bgcolor={"#14213d"}
				color={"#f9cc83"}
				p={2}
				borderRadius={2}
			>
				Master Tarea
			</Typography>
			<Stack
				direction={{ xs: "column", md: "row" }}
				spacing={2}
				bgcolor={"#f9cc83"}
				border={"solid 2px #14213d"}
				p={2}
				borderRadius={2}
				width={{ xs: "90%", sm: "60%" }}
				justifyContent={"space-between"}
			>
				<Form
					agregarTarea={handleArrayTareas}
					setArrayTareas={setArrayTareas}
				></Form>
				<FormControl
					variant="filled"
					sx={{
						minWidth: "30%",
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
				>
					<InputLabel id="filtro-select-label">Seleccione un filtro</InputLabel>
					<Select
						labelId="filtro-select-label"
						id="filtro-select"
						value={filtro}
						onChange={handleFiltro}
					>
						<MenuItem value="Pendiente">Pendiente</MenuItem>
						<MenuItem value="Completa">Completa</MenuItem>
						<MenuItem value="Todas">Todas</MenuItem>
					</Select>
				</FormControl>
			</Stack>
			<Stack
				alignItems="center"
				bgcolor={"#f9cc83"}
				border={"solid 2px #14213d"}
				p={2}
				borderRadius={2}
				width={{ xs: "90%", sm: "60%" }}
			>
				{tareasFiltradas.map((tarea) => (
					<Tarea
						key={tarea.id}
						descripcion={tarea.descripcion}
						id={tarea.id}
						setArrayTareas={setArrayTareas}
						check={tarea.check}
						handleCheckTarea={handleCheckTarea}
						eliminarTarea={eliminarTarea}
					/>
				))}
			</Stack>
		</Stack>
	);
}

export default App;
