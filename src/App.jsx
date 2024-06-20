import "./App.css";
import { Stack, Typography } from "@mui/material";
import { Tarea } from "./componentes/Tarea";
import { Form } from "./componentes/Form";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [arrayTareas, setArrayTareas] = useState([
		{ id: uuidv4(), descripcion: "Tarea de ejemplo" },
	]);

	const handleArrayTareas = (descripcionTarea) => {
		const nuevaTarea = { id: uuidv4(), descripcion: descripcionTarea };
		setArrayTareas([...arrayTareas, nuevaTarea]);
	};

	return (
		<Stack
			spacing={10}
			sx={{
				backgroundColor: "pink",
				height: "100vh",
				alignItems: "center",
				paddingBlock: 3,
			}}
		>
			<Typography variant="h2">Todo list</Typography>
			<Form agregarTarea={handleArrayTareas}></Form>
			<Tarea arrayTareas={arrayTareas}></Tarea>
		</Stack>
	);
}

export default App;
