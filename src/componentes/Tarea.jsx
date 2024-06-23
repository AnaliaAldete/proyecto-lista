import {
	Typography,
	ButtonGroup,
	Button,
	IconButton,
	Stack,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
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
		<Stack
			width={"100%"}
			divider={<Divider orientation="horizontal" flexItem />}
		>
			{edit ? (
				<Form
					descripcion={descripcion}
					edit={edit}
					setEdit={setEdit}
					id={id}
					setArrayTareas={setArrayTareas}
				/>
			) : (
				<Stack direction="row" spacing={5} justifyContent={"space-between"}>
					<Typography
						variant="body1"
						sx={{
							color: check ? "#4caf50" : "inherit",
							textDecoration: check ? "line-through" : "none",
							fontWeight: "bold",
							display: "flex",
							alignItems: "center",
						}}
					>
						{descripcion}
					</Typography>
					<ButtonGroup variant="text" aria-label="Basic button group">
						<IconButton
							size="medium"
							sx={{
								color: check ? "#4caf50" : "#14213d",
								"&:hover": {
									backgroundColor: "#14213d",
									color: "#fca311",
								},
							}}
							onClick={() => handleCheckTarea(id)}
						>
							<FaCheckCircle />
						</IconButton>
						<IconButton
							size="medium"
							sx={{
								color: "#14213d",
								"&:hover": {
									backgroundColor: "#14213d",
									color: "#fca311",
								},
							}}
							onClick={() => setOpen(true)}
						>
							<RiDeleteBin6Fill />
						</IconButton>
						<IconButton
							size="medium"
							sx={{
								color: "#14213d",
								"&:hover": {
									backgroundColor: "#14213d",
									color: "#fca311",
								},
							}}
							onClick={() => setEdit(true)}
						>
							<FaEdit />
						</IconButton>
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
					<Button
						variant="outlined"
						sx={{
							borderColor: "#14213d",
							color: "#14213d",
							"&:hover": {
								borderColor: "#14213d",
							},
						}}
						onClick={() => setOpen(false)}
					>
						Cancelar
					</Button>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "#14213d",
							color: "white",
							"&:hover": {
								backgroundColor: "#fca311",
								color: "#14213d",
								border: "solid 1px #14213d",
							},
							fontWeight: "bold",
						}}
						onClick={handleEliminarTarea}
						autoFocus
					>
						Eliminar
					</Button>
				</DialogActions>
			</Dialog>
		</Stack>
	);
};
