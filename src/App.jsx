import "./App.css";
import { Stack, Typography } from "@mui/material";
import { Tarea } from "./componentes/Tarea";
import { Form } from "./componentes/Form";

function App() {
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
			<Form></Form>
			<Tarea></Tarea>
		</Stack>
	);
}

export default App;
