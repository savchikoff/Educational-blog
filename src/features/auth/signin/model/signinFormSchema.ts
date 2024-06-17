import { z } from "zod";

export const signinFormSchema = z.object({
    email: z.string().email({ message: "Email must be valid" }),
    password: z.string()
});