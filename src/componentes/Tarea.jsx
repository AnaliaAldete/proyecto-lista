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
	useTheme,
} from "@mui/material";
import { useState } from "react";
import { FaCheckCircle, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Form } from "./Form";

export const Tarea = ({
	descripcion,
	id,
	setArrayTareas,
	handleEliminarTarea,
	check,
	handleCheckTarea,
}) => {
	const [edit, setEdit] = useState(false);
	const [open, setOpen] = useState(false);
	const theme = useTheme();

	const eliminarTarea = () => {
		handleEliminarTarea(id);
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
							color: check ? theme.palette.text.tertiary : "inherit",
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
							aria-label="check tarea"
							sx={{
								color: check
									? theme.palette.text.tertiary
									: theme.palette.text.primary,
								"&:hover": {
									backgroundColor: theme.palette.primary.main,
									color: "#fca311",
								},
							}}
							onClick={() => handleCheckTarea(id)}
						>
							<FaCheckCircle />
						</IconButton>
						<IconButton
							size="medium"
							aria-label="borrar tarea"
							sx={{
								color: theme.palette.text.primary,
								"&:hover": {
									backgroundColor: theme.palette.primary.main,
									color: "#fca311",
								},
							}}
							onClick={() => setOpen(true)}
						>
							<RiDeleteBin6Fill />
						</IconButton>
						<IconButton
							size="medium"
							aria-label="editar tarea"
							sx={{
								color: theme.palette.text.primary,
								"&:hover": {
									backgroundColor: theme.palette.primary.main,
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
					<DialogContentText
						id="alert-dialog-description"
						color={theme.palette.primary.main}
					>
						¿Estás seguro de que quieres eliminar esta tarea?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						variant="outlined"
						sx={{
							borderColor: theme.palette.primary.main,
							color: theme.palette.primary.main,
							"&:hover": {
								borderColor: theme.palette.primary.main,
							},
						}}
						onClick={() => setOpen(false)}
					>
						Cancelar
					</Button>
					<Button
						variant="contained"
						sx={{
							color: theme.palette.text.secondary,
							"&:hover": {
								backgroundColor: "#fca311",
								color: theme.palette.primary.main,
								border: `solid 1px ${theme.palette.primary.main}`,
							},
							fontWeight: "bold",
						}}
						onClick={eliminarTarea}
						autoFocus
					>
						Eliminar
					</Button>
				</DialogActions>
			</Dialog>
		</Stack>
	);
};
