"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/shared/consts/theme";

export function ThemeClient({ children }: PropsWithChildren) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}