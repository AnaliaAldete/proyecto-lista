import { Typography, ButtonGroup, Button, Stack } from "@mui/material";
import { FaCheckCircle, FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const Tarea = () => {
	return (
		<Stack direction="row" spacing={10}>
			<Typography variant="body1">ejemplo de tarea</Typography>
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
	);
};
