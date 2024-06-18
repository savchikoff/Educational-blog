import { SignUpForm } from "@/features/auth";
import { Stack } from "@mui/material";
import Link from "next/link";

function SignUp() {
    return (
        <Stack direction="column" alignItems="center" justifyContent="center" gap="24px" width="100%">
            <h1>Sign Up</h1>
            <SignUpForm />
            <p>Already has an account? <Link href={"/signin"} style={{ color: "#1976d2" }}>Sign In</Link></p>
        </Stack>
    )
}

export default SignUp