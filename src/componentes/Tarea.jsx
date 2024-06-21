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

export const Tarea = ({ descripcion, id, setArrayTareas, eliminarTarea }) => {
	const [edit, setEdit] = useState(false);
	const [open, setOpen] = useState(false);

	const handleToggleEdit = () => setEdit(true);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleEliminarTarea = () => {
		eliminarTarea(id);
		handleClose();
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
					<Typography variant="body1">{descripcion}</Typography>
					<ButtonGroup variant="text" aria-label="Basic button group">
						<Button>
							<FaCheckCircle />
						</Button>
						<Button onClick={handleClickOpen}>
							<RiDeleteBin6Fill />
						</Button>
						<Button onClick={handleToggleEdit}>
							<FaEdit />
						</Button>
					</ButtonGroup>
				</Stack>
			)}
			<Dialog
				open={open}
				onClose={handleClose}
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
					<Button variant="outlined" onClick={handleClose}>
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
