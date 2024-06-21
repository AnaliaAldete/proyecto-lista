import "./App.css";
import { Stack, Typography } from "@mui/material";
import { Tarea } from "./componentes/Tarea";
import { Form } from "./componentes/Form";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [arrayTareas, setArrayTareas] = useState(
		JSON.parse(localStorage.getItem("arrayTareas")) || [
			{ id: uuidv4(), descripcion: "Tarea de ejemplo" },
		]
	);

	useEffect(() => {
		localStorage.setItem("arrayTareas", JSON.stringify(arrayTareas));
	}, [arrayTareas]);

	const handleArrayTareas = (descripcionTarea) => {
		const nuevaTarea = { id: uuidv4(), descripcion: descripcionTarea };
		setArrayTareas([...arrayTareas, nuevaTarea]);
	};

	const eliminarTarea = (id) => {
		const nuevasTareas = arrayTareas.filter((tarea) => tarea.id !== id);
		setArrayTareas(nuevasTareas);
	};

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
			<Stack spacing={2} sx={{ width: "100%", alignItems: "center" }}>
				{arrayTareas.map((tarea) => (
					<Tarea
						key={tarea.id}
						descripcion={tarea.descripcion}
						id={tarea.id}
						setArrayTareas={setArrayTareas}
						eliminarTarea={eliminarTarea}
					/>
				))}
			</Stack>
		</Stack>
	);
}

export default App;
