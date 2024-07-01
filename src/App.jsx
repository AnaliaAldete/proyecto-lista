import "./App.css";
import {
	Stack,
	Typography,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	IconButton,
	ThemeProvider,
	CssBaseline,
} from "@mui/material";
import { Tarea } from "./componentes/Tarea";
import { Form } from "./componentes/Form";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { lightTheme, darkTheme } from "./themes/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function App() {
	const [arrayTareas, setArrayTareas] = useState(
		JSON.parse(localStorage.getItem("arrayTareas")) || [
			{ id: uuidv4(), descripcion: "Tarea de ejemplo", check: false },
		]
	);
	const [filtro, setFiltro] = useState("Todas");
	const [mode, setMode] = useState("light");

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
		const tareasCheck = arrayTareas.map((tarea) =>
			tarea.id === id ? { ...tarea, check: !tarea.check } : tarea
		);
		setArrayTareas(tareasCheck);
	};

	const handleEliminarTarea = (id) =>
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

	const toggleColorMode = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	return (
		<ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
			<CssBaseline />

			<Stack
				component="header"
				direction="row"
				width="100%"
				bgcolor={mode === "light" ? "primary.main" : "background.paper"}
				alignItems="center"
				justifyContent={"space-between"}
				padding={2}
				height={"13vh"}
			>
				<Typography variant="h3" component="h1">
					Master Tarea
				</Typography>
				<IconButton
					onClick={toggleColorMode}
					color="inherit"
					aria-label="modo claro/oscuro"
					sx={{
						color: "primary.main",
						backgroundColor: "secondary.main",
						"&:hover": {
							color: "primary.main",
							backgroundColor: "#fca311",
						},
					}}
				>
					{mode === "light" ? <MdDarkMode /> : <MdLightMode />}
				</IconButton>
			</Stack>
			<Stack
				spacing={3}
				padding={{ xs: 2, md: 3 }}
				alignItems={"center"}
				minHeight={"87vh"}
				component="main"
				sx={{
					backgroundImage:
						mode === "light" ? "url(/img/fondo1.png)" : "url(/img/fondo2.png)",
				}}
			>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={2}
					bgcolor={"background.paper"}
					border={2}
					borderColor={"primary.main"}
					p={2}
					borderRadius={2}
					width={{ xs: "100%", sm: "60%" }}
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

							"& .MuiInputLabel-root": {
								color: "primary.main",
							},
						}}
					>
						<InputLabel id="filtro-select-label">
							Seleccione un filtro
						</InputLabel>
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
					bgcolor={"background.paper"}
					border={2}
					borderColor={"primary.main"}
					p={2}
					borderRadius={2}
					width={{ xs: "100%", sm: "60%" }}
				>
					{tareasFiltradas.map((tarea) => (
						<Tarea
							key={tarea.id}
							descripcion={tarea.descripcion}
							id={tarea.id}
							setArrayTareas={setArrayTareas}
							check={tarea.check}
							handleCheckTarea={handleCheckTarea}
							handleEliminarTarea={handleEliminarTarea}
						/>
					))}
				</Stack>
			</Stack>
		</ThemeProvider>
	);
}

export default App;
