import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        white: Palette['primary'];
    }

    interface PaletteOptions {
        white?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        white: true;
    }
}

const theme = createTheme({
    palette: {
        white: {
            main: "#F9F7F7"
        },
    }
});

export { theme }