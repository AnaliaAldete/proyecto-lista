import { Typography, ButtonGroup, Button, Stack } from "@mui/material";
import { FaCheckCircle, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const Tarea = ({ arrayTareas }) => {
	return (
		<Stack spacing={2}>
			{arrayTareas.map((tarea) => (
				<Stack direction="row" key={tarea.id}>
					<Typography variant="body1">{tarea.descripcion}</Typography>
					<ButtonGroup variant="text" aria-label="Basic button group">
						<Button>
							<FaCheckCircle />
						</Button>
						<Button>
							<RiDeleteBin6Fill />
						</Button>
						<Button>
							<FaEdit />
						</Button>
					</ButtonGroup>
				</Stack>
			))}
		</Stack>
	);
};
