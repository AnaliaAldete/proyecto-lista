import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#14213d", //azul
		},
		secondary: {
			main: "#f9cc83", //cremita
		},
		background: {
			paper: "#f9cc83",
		},
		text: {
			primary: "#14213d",
			secondary: "#f9cc83",
			tertiary: "#4caf50", //verde
		},
	},
	typography: {
		h3: {
			color: "#f9cc83",
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#ffffff",
		},
		secondary: {
			main: "#14213d",
		},
		background: {
			default: "#14213d",
			paper: "#212b36",
		},
		text: {
			primary: "#ffffff",
			secondary: "#000000",
			tertiary: "#4caf50",
		},
	},
});
