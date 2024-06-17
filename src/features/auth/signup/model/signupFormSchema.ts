import { z } from "zod";

export const signupFormSchema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email({ message: "Email must be valid" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Password must contain at least one letter, one number and one special character" }),
    userName: z.string().min(2, { message: "Username must be at least 2 characters" }).max(15, { message: "Password must be shorter than 15 characters " })
});