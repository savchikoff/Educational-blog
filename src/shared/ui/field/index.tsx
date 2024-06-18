import { TextField, FormHelperText, Stack } from "@mui/material";
import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";

type ValidFieldNames<T extends FieldValues> = keyof T;

interface FieldProps<T extends FieldValues> {
    type: string;
    label: string;
    name: ValidFieldNames<T>;
    register: UseFormRegister<T>;
    error: FieldError | undefined;
    variant?: "outlined" | "filled" | "standard";
}

export function Field<T extends FieldValues>({ type, label, name, register, error, variant = "outlined" }: FieldProps<T>) {
    return (
        <Stack>
            <TextField
                type={type}
                label={label}
                {...register(name as any)}
                variant={variant}
            />
            {error && <FormHelperText error>{error.message}</FormHelperText>}
        </Stack>
    );
}