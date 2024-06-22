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
			spacing={10}
			sx={{
				backgroundColor: "pink",
				minHeight: "100vh",
				alignItems: "center",
				paddingBlock: 3,
			}}
		>
			<Typography variant="h2">Todo list</Typography>
			<Form
				agregarTarea={handleArrayTareas}
				setArrayTareas={setArrayTareas}
			></Form>
			<FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
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
			<Stack spacing={2} sx={{ width: "100%", alignItems: "center" }}>
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
