import { TextField, FormHelperText, Stack } from "@mui/material";
import { FieldError, UseFormRegister } from "react-hook-form";

interface FormData {
    email?: string,
    password?: string,
    userName?: string
    code?: string
}

interface FieldProps {
    type: string,
    label: string,
    name: validFieldNames,
    register: UseFormRegister<FormData>,
    error: FieldError | undefined,
    variant?: "outlined" | "filled" | "standard"

}

type validFieldNames = "email" | "password" | "userName" | "code"

export function Field({ type, label, name, register, error, variant = "outlined" }: FieldProps) {
    return (
        <Stack>
            <TextField
                type={type}
                label={label}
                {...register(name)}
                variant={variant}
            />
            {error && <FormHelperText error>{error.message}</FormHelperText>}
        </Stack>
    )
}