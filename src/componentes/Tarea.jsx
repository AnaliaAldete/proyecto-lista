import {
	Typography,
	ButtonGroup,
	Button,
	Stack,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { FaCheckCircle, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Form } from "./Form";

export const Tarea = ({
	descripcion,
	id,
	setArrayTareas,
	eliminarTarea,
	check,
	handleCheckTarea,
}) => {
	const [edit, setEdit] = useState(false);
	const [open, setOpen] = useState(false);

	const handleEliminarTarea = () => {
		eliminarTarea(id);
		setOpen(false);
	};

	return (
		<Stack spacing={2}>
			{edit ? (
				<Form
					descripcion={descripcion}
					edit={edit}
					setEdit={setEdit}
					id={id}
					setArrayTareas={setArrayTareas}
				/>
			) : (
				<Stack direction="row">
					<Typography
						variant="body1"
						sx={{
							backgroundColor: check ? "lightgreen" : "inherit",
							textDecoration: check ? "line-through" : "none",
						}}
					>
						{descripcion}
					</Typography>
					<ButtonGroup variant="text" aria-label="Basic button group">
						<Button onClick={() => handleCheckTarea(id)}>
							<FaCheckCircle />
						</Button>
						<Button onClick={() => setOpen(true)}>
							<RiDeleteBin6Fill />
						</Button>
						<Button onClick={() => setEdit(true)}>
							<FaEdit />
						</Button>
					</ButtonGroup>
				</Stack>
			)}
			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Confirmar eliminación"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						¿Estás seguro de que quieres eliminar esta tarea?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant="outlined" onClick={() => setOpen(false)}>
						Cancelar
					</Button>
					<Button variant="contained" onClick={handleEliminarTarea} autoFocus>
						Eliminar
					</Button>
				</DialogActions>
			</Dialog>
		</Stack>
	);
};
