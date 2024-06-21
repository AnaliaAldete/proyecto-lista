import { Typography, ButtonGroup, Button, Stack } from "@mui/material";
import { useState } from "react";
import { FaCheckCircle, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Form } from "./Form";

export const Tarea = ({ descripcion }) => {
	const [edit, setEdit] = useState(false);

	const handleToggleEdit = () => setEdit(true);

	return (
		<Stack spacing={2}>
			{edit ? (
				<Form descripcion={descripcion} edit={edit} setEdit={setEdit} />
			) : (
				<Stack direction="row">
					<Typography variant="body1">{descripcion}</Typography>
					<ButtonGroup variant="text" aria-label="Basic button group">
						<Button>
							<FaCheckCircle />
						</Button>
						<Button>
							<RiDeleteBin6Fill />
						</Button>
						<Button onClick={handleToggleEdit}>
							<FaEdit />
						</Button>
					</ButtonGroup>
				</Stack>
			)}
		</Stack>
	);
};
