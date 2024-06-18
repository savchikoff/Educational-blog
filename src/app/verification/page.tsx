import { VerificationForm } from "@/features/auth";
import { Stack } from "@mui/material";
import Link from "next/link";

function Verification() {

    return (
        <Stack direction="column" alignItems="center" justifyContent="center" gap="24px" width="100%">
            <Stack textAlign="center">
                <h1>Verification</h1>
                <p>Enter the verification code that we have sent to your email</p>
            </Stack>
            <VerificationForm />
            <p>Already has an account? <Link href={"/signin"} style={{ color: "#1976d2" }}>Sign In</Link></p>
        </Stack>
    )
}

export default Verification