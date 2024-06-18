import { z } from "zod";

export const verificationFormSchema = z.object({
    code: z.string().length(6, { message: 'Verification code should contain exactly 6 numbers' })
});